import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateShowtimeDto {
  @IsNumber()
  movieId: number

  @IsNumber()
  price: number

  @IsNotEmpty()
  @IsString()
  theater: string

  @IsDateString()
  startTime: Date

  @IsDateString()
  endTime: Date
}