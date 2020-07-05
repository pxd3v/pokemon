const path = require('path');

module.exports = {
    client: 'pg',
    connection: {
        host: "192.168.99.100",
        user: "postgres",
        password: "pokemon",
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