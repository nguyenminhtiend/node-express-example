module.exports = {
    jwt_secret: "shhh",
    db: {
        development: {
            host: '127.0.0.1',
            user: 'postgres',
            password: 'Password.123',
            database: 'test',
            port: '5432',
            dialect: 'postgres'
        },
        staging: {
            host: '127.0.0.1',
            user: 'postgres',
            password: 'Password.123',
            database: 'test',
            port: '5432',
            dialect: 'postgres'
        },
        production: {
            host: '127.0.0.1',
            user: 'postgres',
            password: 'Password.123',
            database: 'test',
            port: '5432',
            dialect: 'postgres'
        }
    }
};