const path = require('path');

module.exports = {
    client: 'pg',
    connection: {
        host: process.env.DB_DOM,
        user: "postgres",
        password: process.env.DB_PASSWORD,
        database: "pokemon"
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
}