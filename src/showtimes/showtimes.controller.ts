import { Body, Controller, Delete, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { ShowtimesService } from './showtimes.service';
import { CreateShowtimeDto } from './dto/create-showtime.dto';
import { UpdateShowtimeDto } from './dto/update-showtime.dto';

@Controller('showtimes')
export class ShowtimesController {
    constructor(private readonly showtimesService: ShowtimesService) { }

    @Get('all')
    findAll()
    {
        return this.showtimesService.findAll()
    }
    
    @Get(':showtimeId')
    findOne(@Param('showtimeId') showtimeId: string) {
        return this.showtimesService.findOne(+showtimeId)
    }


    @Post()
    addShowtime(@Body(ValidationPipe) showtime: CreateShowtimeDto) {
        return this.showtimesService.addShowtime(showtime)
    }

    @Post('update/:showtimeId')
    updateShowtime(@Param('showtimeId') showtimeId: string, @Body(ValidationPipe) showtime: UpdateShowtimeDto) {
        return this.showtimesService.updateShowtime(+showtimeId, showtime)
    }

    @Delete(':showtimeId')
    deleteShowtime(@Param('showtimeId') showtimeId: string) {
        return this.showtimesService.deleteShowtime(+showtimeId)
    }
}
