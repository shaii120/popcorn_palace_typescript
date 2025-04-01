import { Test, TestingModule } from '@nestjs/testing';
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';

describe('BookingsController', () => {
  let controller: BookingsController;

  const mockBookingsService = {
    create: jest.fn(dto => { return { "bookingId": crypto.randomUUID } })
  }
  const bookingDtoMock: CreateBookingDto = {
    "showtimeId": 1,
    "seatNumber": 15,
    "userId": "84438967-f68f-4fa0-b620-0f08217e76af"
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingsController],
      providers: [
        BookingsService,
        {
          provide: getRepositoryToken(Booking),
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    })
      .overrideProvider(BookingsService)
      .useValue(mockBookingsService)
      .compile();

    controller = module.get<BookingsController>(BookingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // describe('booking', () => {
  //   it('sohuld return UUID', () => {
  //     const res = controller.create(bookingDtoMock)
  //     expect(res).toEqual({ 'bookingId': expect.any(String) })
  //   })
  // })
});
