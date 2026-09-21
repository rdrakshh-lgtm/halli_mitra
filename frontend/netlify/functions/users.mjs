import mysql from "mysql2/promise";
import jwt from "jsonwebtoken";

export default async (request) => {
  try {
    // Only allow GET
    if (request.method !== "GET") {
      return Response.json(
        { detail: "Method not allowed" },
        { status: 405 }
      );
    }

    const authHeader = request.headers.get("authorization");

    // =========================
    // /users/me
    // =========================
    if (request.url.endsWith("/users/me")) {
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return Response.json(
          { detail: "Not authenticated" },
          { status: 401 }
        );
      }

      const token = authHeader.split(" ")[1];

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY
      );

      const connection = await mysql.createConnection(
        process.env.MYSQL_URL
      );

      const [rows] = await connection.execute(
        `SELECT id, full_name, email, mobile, role,
                wallet_balance, total_commission,
                is_active, created_at, updated_at
         FROM users
         WHERE id = ?
         LIMIT 1`,
        [decoded.user_id]
      );

      await connection.end();

      if (rows.length === 0) {
        return Response.json(
          { detail: "User not found" },
          { status: 404 }
        );
      }

      return Response.json(rows[0]);
    }

    // =========================
    // /users/
    // =========================
    const connection = await mysql.createConnection(
      process.env.MYSQL_URL
    );

    const [users] = await connection.execute(
      `SELECT id, full_name, email, mobile, role
       FROM users`
    );

    await connection.end();

    return Response.json(users);

  } catch (error) {
    console.error("USERS ERROR:", error);

    return Response.json(
      { detail: "Internal server error" },
      { status: 500 }
    );
  }
};