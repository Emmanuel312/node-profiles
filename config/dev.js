const config = {
    "server": {
        "port": 3002
    },
    "database": {
        "host": "my.dev.db.domain",
        "port": 5432,
        "user": "user",
        "password": process.env.DATABASE_PASSWORD
    }
}

module.exports = config