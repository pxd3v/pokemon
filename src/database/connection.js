import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_DOM,
        user: "postgres",
        password: process.env.DB_PASSWORD,
        database: "pokemon"
    },
    useNullAsDefault: true,
})

export default connection;