// const mysql = require("mysql2/promise");
import mysql from 'mysql2/promise';

export async function connection() {
    try {
        const db = await mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "vraj@1381",
            database: "university_ratings"
        });
        console.log("Connected to MySQL database");
        return db;
    } catch (err) {
        console.error("Error connecting to MySQL database:", err);
        throw err;
    }
}

export default connection;
