import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Unique("unq_seat", ['showtimeId', 'seatNumber'])
@Entity()
export class Booking {
    @PrimaryGeneratedColumn('uuid')
    bookingId: string

    @Column()
    showtimeId: number

    @Column()
    seatNumber: number

    @Column()
    userId: string
}
