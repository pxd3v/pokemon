import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'pg',
    connection: {
        host: "192.168.99.100",
        user: "postgres",
        password: "pokemon",
        database: "pokemon"
    },
    useNullAsDefault: true,
})

export default connection;