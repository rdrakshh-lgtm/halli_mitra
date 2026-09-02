import mysql from "mysql2/promise";

export default async () => {
  try {
    const connection = await mysql.createConnection(process.env.MYSQL_URL);

    const [rows] = await connection.query("SHOW TABLES");

    await connection.end();

    return Response.json({
      status: "success",
      message: "Railway MySQL connected successfully",
      tables: rows
    });
  } catch (error) {
    return Response.json(
      {
        status: "error",
        message: error.message
      },
      { status: 500 }
    );
  }
};