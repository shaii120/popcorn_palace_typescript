import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'db',
    port: +process.env.PG_PORT,
    database: "popcorn-palace",
    entities: [__dirname + '/**/*.entity.{js,ts}'],
    username: "popcorn-palace",
    password: "popcorn-palace",
    synchronize: process.env.NODE_ENV === 'DEV'
}