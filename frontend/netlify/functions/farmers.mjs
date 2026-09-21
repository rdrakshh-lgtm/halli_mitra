import mysql from "mysql2/promise";

export default async (request) => {
  try {
    // Only allow POST
    if (request.method !== "POST") {
      return Response.json(
        { detail: "Method not allowed" },
        { status: 405 }
      );
    }

    const body = await request.json();

    const {
      name,
      phone,
      village,
      district,
      state
    } = body;

    // Validate required fields
    if (!name || !phone || !village || !district || !state) {
      return Response.json(
        { detail: "All fields are required" },
        { status: 400 }
      );
    }

    const connection = await mysql.createConnection(
      process.env.MYSQL_URL
    );

    const [result] = await connection.execute(
      `INSERT INTO farmers
       (name, phone, village, district, state)
       VALUES (?, ?, ?, ?, ?)`,
      [
        name,
        phone,
        village,
        district,
        state
      ]
    );

    await connection.end();

    return Response.json(
      {
        id: result.insertId,
        name,
        phone,
        village,
        district,
        state
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("FARMER ERROR:", error);

    return Response.json(
      { detail: "Internal server error" },
      { status: 500 }
    );
  }
};