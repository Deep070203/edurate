import { NextResponse } from "next/server";
import pool from "../../../utlil/db/mysql";

export default async function GET() {
    try {
        const db = await pool.getConnection()
        const query = 'SELECT * FROM universities'
        const [rows] = await db.execute(query)
        console.log(rows);
        console.log("Here");
        
        db.release()
        
        return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}