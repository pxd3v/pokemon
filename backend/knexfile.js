const path = require('path');
require('dotenv').config();

module.exports = {
    client: 'pg',
    connection: {
        host: "172.17.0.1",
        user: "postgres",
        password: "pokemon",
        database: "pokemon2",
        port: "32768"
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
}