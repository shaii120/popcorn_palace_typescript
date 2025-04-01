import { BadRequestException, Injectable } from '@nestjs/common';
import { Showtime } from './entities/showtime.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, MoreThanOrEqual, Not, Repository } from 'typeorm';
import { CreateShowtimeDto } from './dto/create-showtime.dto';
import { UpdateShowtimeDto } from './dto/update-showtime.dto';

@Injectable()
export class ShowtimesService {
    constructor(
        @InjectRepository(Showtime) private showtimeRepo: Repository<Showtime>
    ) { }

    async findOverlap(showtime: CreateShowtimeDto, showtimeId?: number) {
        showtimeId ||= -1
        return await this.showtimeRepo.findOne({
            where: {
                theater: showtime.theater,
                startTime: LessThanOrEqual(showtime.endTime),
                endTime: MoreThanOrEqual(showtime.startTime),
                id: Not(showtimeId)
            }
        })
    }

    async findOne(showtimeId: number) {
        return await this.showtimeRepo.findOne({ where: { id: showtimeId } })
    }

    async findAll() {
        return await this.showtimeRepo.find()
    }

    async addShowtime(showtime: CreateShowtimeDto) {
        if (showtime.startTime > showtime.endTime) {
            throw new BadRequestException(`The show end time is lower than its start time`)
        }
        if (await this.findOverlap(showtime)) {
            throw new BadRequestException(`Found an overlap showtime at the theater`)
        }
        return await this.showtimeRepo.save(showtime)
    }

    async updateShowtime(showtimeId: number, showtime: UpdateShowtimeDto) {
        const curr = await this.findOne(showtimeId)
        const updated = { ...curr, ...showtime }
        const { ['id']: ommited, ...updatedDTO } = updated

        if (updatedDTO.startTime > updatedDTO.endTime) {
            throw new BadRequestException(`The show end time is lower than its start time`)
        }

        if (await this.findOverlap(updatedDTO, showtimeId)) {
            throw new BadRequestException(`Found an overlap showtime for the theater`)
        }
        await this.showtimeRepo.update({ id: showtimeId }, showtime)
    }

    async deleteShowtime(showtimeId: number) {
        await this.showtimeRepo.delete({ id: showtimeId })
    }
}
