var mysql = require("mysql");

if (process.env.NODE_ENV === "production") {

  var connection = mysql.createConnection({
    port: 3306,
    host: "edo4plet5mhv93s3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "o336wzdttql8mahy",
    password: "h10ws08po54s2gz3",
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
