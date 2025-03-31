import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
    private moviesData = [
        {
            "title": "Me and Me!!",
            "genre": "Fiction",
            "duration": 30,
            "rating": 7.7,
            "releaseYear": 2027
        },
        {
            "title": "Why me?",
            "genre": "Reality",
            "duration": 60,
            "rating": 7.8,
            "releaseYear": 2028
        },
        {
            "title": "Just Be Cause",
            "genre": "Horror",
            "duration": 90,
            "rating": 8.5,
            "releaseYear": 2029
        }
    ]

    getAllMovies() {
        return this.moviesData;
    }

    addMovie(movie: CreateMovieDto): string {
        return 'test!';
    }

    updateMovie(movieTitle: string, updatedMovie: UpdateMovieDto) {
        this.moviesData = this.moviesData.map(movie => {
            if (movie.title === movieTitle) {
                return { ...movie, ...updatedMovie }
            }
            return movie
        })
        return this.moviesData.filter(movie => movie.title === movieTitle);
    }

    deleteMovie(title: string) {
        this.moviesData = this.moviesData.filter(movie => movie.title !== title)
    }
}
