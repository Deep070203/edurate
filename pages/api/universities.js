import mysql from "mysql2/promise";
import pool from "../../utlil/db/mysql"

export default async function handler(req, res) {

    const dbconnect = await pool.getConnection();

    try {
        const query = "SELECT * FROM universities";
        const values = []
        const [rows] = await dbconnect.execute(query, values);
        dbconnect.release();
        res.status(200).json({ universities: rows })
    }catch (error){
        console.error('Error querying the database:', error);
    }
}