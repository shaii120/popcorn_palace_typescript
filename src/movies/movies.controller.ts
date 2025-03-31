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
    addMovie(@Body(ValidationPipe) movie: CreateMovieDto) {
        // console.log(movie)
        return this.moviesService.addMovie(movie);
    }

    @Post('update/:movieTitle')
    updateMovie(@Param('movieTitle') movieTitle: string, @Body(ValidationPipe) movie: UpdateMovieDto) {
        this.moviesService.updateMovie(movieTitle, movie);
    }

    @Delete(':movieTitle')
    deleteMovie(@Param('movieTitle') movieTitle: string) {
        this.moviesService.deleteMovie(movieTitle);
    }
}
