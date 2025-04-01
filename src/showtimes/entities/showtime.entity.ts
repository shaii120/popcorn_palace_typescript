import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Showtime {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    movieId: number

    @Column({ type: "real" })
    price: number

    @Column()
    theater: string

    @Column({ type: "timestamptz" })
    startTime: Date

    @Column({ type: "timestamptz" })
    endTime: Date
}