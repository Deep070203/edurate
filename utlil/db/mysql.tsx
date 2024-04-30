import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "vraj@1381",
    database: "university_ratings",
    waitForConnections: true
})

export default pool

// we will get the remote connection(MySQL remote server or Amazon dynamoDB)