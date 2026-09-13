import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async (request) => {
  try {
    const body = await request.json();

    const { action } = body;

    const connection = await mysql.createConnection(process.env.MYSQL_URL);

    // =========================
    // REGISTER
    // =========================
    if (action === "register") {
      const {
        full_name,
        email,
        mobile,
        password,
        sponsor_code
      } = body;

      if (!full_name || !email || !mobile || !password) {
        await connection.end();

        return Response.json(
          { detail: "All required fields must be provided" },
          { status: 400 }
        );
      }

      const [existingEmail] = await connection.execute(
        "SELECT id FROM users WHERE email = ? LIMIT 1",
        [email]
      );

      if (existingEmail.length > 0) {
        await connection.end();

        return Response.json(
          { detail: "Email already exists" },
          { status: 400 }
        );
      }

      const [existingMobile] = await connection.execute(
        "SELECT id FROM users WHERE mobile = ? LIMIT 1",
        [mobile]
      );

      if (existingMobile.length > 0) {
        await connection.end();

        return Response.json(
          { detail: "Mobile already exists" },
          { status: 400 }
        );
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const referralCode = Math.random()
        .toString(36)
        .substring(2, 10)
        .toUpperCase();

      const [result] = await connection.execute(
        `INSERT INTO users
        (full_name, email, mobile, password, sponsor_code, referral_code, role)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          full_name,
          email,
          mobile,
          hashedPassword,
          sponsor_code || null,
          referralCode,
          "user"
        ]
      );

      await connection.end();

      return Response.json({
        id: result.insertId,
        full_name,
        email,
        mobile
      });
    }

    // =========================
    // LOGIN
    // =========================
    if (action === "login") {
      const { email, password } = body;

      if (!email || !password) {
        await connection.end();

        return Response.json(
          { detail: "Email and password are required" },
          { status: 400 }
        );
      }

      const [rows] = await connection.execute(
        "SELECT * FROM users WHERE email = ? LIMIT 1",
        [email]
      );

      if (rows.length === 0) {
        await connection.end();

        return Response.json(
          { detail: "Invalid Email or Password" },
          { status: 401 }
        );
      }

      const user = rows[0];

      const passwordValid = await bcrypt.compare(
        password,
        user.password
      );

      if (!passwordValid) {
        await connection.end();

        return Response.json(
          { detail: "Invalid Email or Password" },
          { status: 401 }
        );
      }

      const token = jwt.sign(
        {
          sub: user.email,
          user_id: user.id,
          role: user.role
        },
        process.env.JWT_SECRET_KEY,
        {
          algorithm: "HS256",
          expiresIn: "60m"
        }
      );

      await connection.end();

      return Response.json({
        access_token: token,
        token_type: "bearer",
        role: user.role
      });
    }

    await connection.end();

    return Response.json(
      { detail: "Invalid action" },
      { status: 400 }
    );

  } catch (error) {
    console.error("AUTH ERROR:", error);

    return Response.json(
      {
        detail: "Internal server error"
      },
      { status: 500 }
    );
  }
};