import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookingsService {
    constructor(
        @InjectRepository(Booking) private bookingRepo: Repository<Booking>
    ) { }

    async create(createBookingDto: CreateBookingDto) {
        try {
            const newRow = await this.bookingRepo.save(createBookingDto)
            return { "bookingId": newRow.bookingId }
        }
        catch (error) {
            throw new BadRequestException(`${error.driverError.detail}`)
        }
    }
}
