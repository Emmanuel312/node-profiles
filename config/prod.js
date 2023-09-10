const config = {
    "server": {
        "port": 3000
    },
    "database": {
        "host": "my.prod.db.domain",
        "port": 5432,
        "user": "user",
        "password": process.env.DATABASE_PASSWORD
    }
}

module.exports = config