const express = require("express")
const config = require("config")

const applicationProperties = config.get("application")
const serverProperties = config.get("server")
const databaseProperties = config.get("database")


// this property only exists on default profile
console.log(applicationProperties.name)
// this secret should be inject via OS env
console.log(databaseProperties.password)

const server = express()
server.listen(serverProperties.PORT, () => console.log(`Server is running on port ${serverProperties.port}`))