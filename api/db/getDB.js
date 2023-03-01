const mysql = require("mysql2/promise");

let pool;

const { MYSQL_HOST, MYSQL_PASS, MYSQL_USER, MYSQL_DB } = process.env;

const getDB = async () => {
    try {
        if (!pool) {
            pool = await mysql.createPool({
                connectionLimit: 10,
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASS,
                database: MYSQL_DB,
                timezone: "Z"
            })
        }

        return await pool.getConnection()
    } catch (error) {

    }
}

module.exports = getDB;