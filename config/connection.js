var mysql = require("mysql");

if (process.env.NODE_ENV === "production") {

  var connection = mysql.createConnection({
    port: 3306,
    host: "e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "rkgaotlfg0psubnf",
    password: "d9cvu3c8qfkhsfoy",
    database: "d8th2nv7a348jquk"
  });
} else {
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "dudewasup23",
    database: "burger_db"
  });

}




// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
