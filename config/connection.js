var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "qbct6vwi8q648mrn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "wc7bsb99ipujjxl0",
    password: "kjyrhvlhk2ol05bw",
    database: "xexv9q7g4m7prjil"
})

connection.connect((err) => {
    if (err) {
        console.log("Error connecting: " + err.stack)
    }
    console.log("Connected as id " + connection.threadId)
})

module.exports = connection