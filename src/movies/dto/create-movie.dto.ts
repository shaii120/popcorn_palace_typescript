import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  genre: string;

  @IsNumber()
  duration: number;

  @IsNumber()
  rating: number;

  @IsNumber()
  releaseYear: number;
}