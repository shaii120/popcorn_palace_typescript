import { IsNumber, IsUUID } from "class-validator";

export class CreateBookingDto {
    @IsNumber()
    showtimeId: number

    @IsNumber()
    seatNumber: number

    @IsUUID()
    userId: string
}
