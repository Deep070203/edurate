import pool from "../../utlil/db/mysql"

export default async function handler(req, res) {
    const { university_id } = req.query;
    const dbconnect = await pool.getConnection();

    try {
        const query = "SELECT * FROM courses WHERE university_id = ?";
        const values = [university_id]
        const [rows] = await dbconnect.execute(query, values);
        dbconnect.release();
        res.status(200).json({ universities: rows })
    }catch (error){
        console.error('Error querying the database:', error);
    }
}