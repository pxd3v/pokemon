import knex from 'knex';
import path from 'path';
require('dotenv').config();

const connection = knex({
    client: 'pg',
    connection: {
        host: "172.17.0.1",
        user: "postgres",
        password: "pokemon",
        database: "pokemon",
        port: "32768"
    },
    useNullAsDefault: true,
})

export default connection;