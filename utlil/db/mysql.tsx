import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: "Deeps-MacBook-Pro.local",
    user: "root",
    password: "Dj@mysql29",
    database: "Edurate",
    waitForConnections: true
})

export default pool