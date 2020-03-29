var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "meaty_sandwichesDB"
})

connection.connect((err) => {
    if (err) {
        console.log("Error connecting: " + err.stack)
    }
    console.log("Connected as id " + connection.threadId)
})

module.exports = connection