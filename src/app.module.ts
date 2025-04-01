import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowtimesModule } from './showtimes/showtimes.module';
import { MoviesModule } from './movies/movies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'dbConfig';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [ShowtimesModule,
    MoviesModule,
    BookingsModule,
    TypeOrmModule.forRoot(pgConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
