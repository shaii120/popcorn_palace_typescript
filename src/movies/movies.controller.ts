import { Controller, Get, Post, Body, Delete, Param, ValidationPipe } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) { }

    @Get('all')
    getAllMovies() {
        return this.moviesService.getAllMovies();
    }

    @Post()
    addMovie(@Body(ValidationPipe) movie: CreateMovieDto): string {
        return this.moviesService.addMovie(movie);
    }

    @Post('update/:movieTitle')
    updateMovie(@Param('movieTitle') movieTitle: string, @Body(ValidationPipe) movie: UpdateMovieDto) {
        return this.moviesService.updateMovie(movieTitle, movie);
    }

    @Delete(':movieTitle')
    deleteMovie(@Param('movieTitle') movieTitle: string) {
        return this.moviesService.deleteMovie(movieTitle);
    }
}
