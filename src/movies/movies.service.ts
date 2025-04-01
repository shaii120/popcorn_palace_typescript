import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movies.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie) private movieRepo: Repository<Movie>
    ) { }

    async getAllMovies() {
        return await this.movieRepo.find()
    }

    async addMovie(movie: CreateMovieDto) {
        try {
            return await this.movieRepo.save(movie)
        }
        catch (error) {
            throw new BadRequestException(`${error.driverError.detail}`)
        }
    }

    async updateMovie(movieTitle: string, updatedMovie: UpdateMovieDto) {
        try {
            await this.movieRepo.update({ title: movieTitle }, updatedMovie)
        }
        catch (error) {
            throw new BadRequestException(`${error.driverError.detail}`)
        }
    }

    async deleteMovie(title: string) {
        await this.movieRepo.delete({ title: title })
    }
}
