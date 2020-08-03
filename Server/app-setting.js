module.exports = {
    portNo: 4000,
    db: {
        mongo: {
            main: {
                name: 'DB_NAME',
                address: 'localhost:27017'
            },
            log: {
                name: 'DB_NAME_log',
                address: 'localhost:27017'
            }
        },
        sqlConfig: {
            driver: 'mssql',
            config: {
                user: 'appuser',
                password: 'sHRCTp@ss!)!%%',
                server: '10.4.1.4\\scts',
                database: 'Shrct'
            }
        }
    },
    jwtExpireTime: 3000,
    tokenHashKey: 'YOUR_TOKEN_HASH_KEY',
    jwtSecret: "YOUR_JWT_SECRET_KEY"


}
