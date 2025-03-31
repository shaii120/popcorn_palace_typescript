import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    title: string

    @Column()
    genre: string

    @Column()
    duration: number

    @Column()
    rating: number

    @Column()
    releaseYear: number
}