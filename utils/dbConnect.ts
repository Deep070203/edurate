const mysql = require('mysql2');
const fs = require('fs');

require('dotenv').config();



// Connect to database
export default const connection = mysql.createConnection({
	host: "Deeps-MacBook-Pro.local",
	user: "root",
	password: "Dj@mysql29",
	database: "Edurate",
	multipleStatements: true
});

connection.connect();
