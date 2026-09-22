import mysql from "mysql2/promise";

export default async (request) => {
  let connection;

  try {
    const url = new URL(request.url);
    const path = url.pathname;

    const parts = path.split("/").filter(Boolean);

    const cropId = parts.length > 3 ? parts[3] : null;

    // /crops or /crops/
    connection = await mysql.createConnection(
      process.env.MYSQL_URL
    );

    // =========================
    // CREATE CROP
    // POST /crops
    // =========================
    if (request.method === "POST") {
      const body = await request.json();

      const {
        farmer_id,
        crop_name,
        variety,
        area,
        season,
        sowing_date
      } = body;

      if (
        farmer_id === undefined ||
        !crop_name ||
        !variety ||
        !area ||
        !season ||
        !sowing_date
      ) {
        return Response.json(
          { detail: "All fields are required" },
          { status: 400 }
        );
      }

      const [result] = await connection.execute(
        `INSERT INTO crops
        (farmer_id, crop_name, variety, area, season, sowing_date)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [
          farmer_id,
          crop_name,
          variety,
          area,
          season,
          sowing_date
        ]
      );

      return Response.json({
        id: result.insertId,
        farmer_id,
        crop_name,
        variety,
        area,
        season,
        sowing_date
      });
    }

    // =========================
    // GET ALL CROPS
    // GET /crops
    // =========================
    if (request.method === "GET" && !cropId) {
      const [rows] = await connection.execute(
        `SELECT
          id,
          farmer_id,
          crop_name,
          variety,
          area,
          season,
          DATE_FORMAT(sowing_date, '%Y-%m-%d') AS sowing_date
        FROM crops`
      );

      return Response.json(rows);
    }

    // =========================
    // GET ONE CROP
    // GET /crops/{id}
    // =========================
    if (request.method === "GET" && cropId) {
      const [rows] = await connection.execute(
        `SELECT
          id,
          farmer_id,
          crop_name,
          variety,
          area,
          season,
          DATE_FORMAT(sowing_date, '%Y-%m-%d') AS sowing_date
        FROM crops
        WHERE id = ?
        LIMIT 1`,
        [cropId]
      );

      if (rows.length === 0) {
        return Response.json(
          { detail: "Crop not found" },
          { status: 404 }
        );
      }

      return Response.json(rows[0]);
    }

    // =========================
    // UPDATE CROP
    // PUT /crops/{id}
    // =========================
    if (request.method === "PUT" && cropId) {
      const body = await request.json();

      const {
        farmer_id,
        crop_name,
        variety,
        area,
        season,
        sowing_date
      } = body;

      if (
        farmer_id === undefined ||
        !crop_name ||
        !variety ||
        !area ||
        !season ||
        !sowing_date
      ) {
        return Response.json(
          { detail: "All fields are required" },
          { status: 400 }
        );
      }

      const [result] = await connection.execute(
        `UPDATE crops
        SET farmer_id = ?,
            crop_name = ?,
            variety = ?,
            area = ?,
            season = ?,
            sowing_date = ?
        WHERE id = ?`,
        [
          farmer_id,
          crop_name,
          variety,
          area,
          season,
          sowing_date,
          cropId
        ]
      );

      if (result.affectedRows === 0) {
        return Response.json(
          { detail: "Crop not found" },
          { status: 404 }
        );
      }

      const [rows] = await connection.execute(
        `SELECT
          id,
          farmer_id,
          crop_name,
          variety,
          area,
          season,
          DATE_FORMAT(sowing_date, '%Y-%m-%d') AS sowing_date
        FROM crops
        WHERE id = ?
        LIMIT 1`,
        [cropId]
      );

      return Response.json(rows[0]);
    }

    // =========================
    // DELETE CROP
    // DELETE /crops/{id}
    // =========================
    if (request.method === "DELETE" && cropId) {
      const [result] = await connection.execute(
        `DELETE FROM crops WHERE id = ?`,
        [cropId]
      );

      if (result.affectedRows === 0) {
        return Response.json(
          { detail: "Crop not found" },
          { status: 404 }
        );
      }

      return Response.json({
        message: "Crop deleted successfully"
      });
    }

    return Response.json(
      { detail: "Method not allowed" },
      { status: 405 }
    );

  } catch (error) {
    console.error("CROPS ERROR:", error);

    return Response.json(
      { detail: "Internal server error" },
      { status: 500 }
    );

  } finally {
    if (connection) {
      await connection.end();
    }
  }
};