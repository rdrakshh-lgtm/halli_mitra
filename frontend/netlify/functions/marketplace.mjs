import mysql from "mysql2/promise";

export default async (request) => {
  let connection;

  try {
    const url = new URL(request.url);
    const path = url.pathname;

    const parts = path.split("/").filter(Boolean);

    const marketplaceIndex = parts.indexOf("marketplace");

    const marketplaceId =
      marketplaceIndex !== -1 && parts[marketplaceIndex + 1]
        ? parts[marketplaceIndex + 1]
        : null;

    connection = await mysql.createConnection(
      process.env.MYSQL_URL
    );

    // =========================
    // CREATE MARKETPLACE ITEM
    // POST /marketplace
    // =========================
    if (request.method === "POST") {
      const body = await request.json();

      const {
        farmer_id,
        crop_name,
        quantity,
        price,
        location,
        contact,
        image
      } = body;

      if (
        farmer_id === undefined ||
        !crop_name ||
        quantity === undefined ||
        price === undefined ||
        !location ||
        !contact
      ) {
        return Response.json(
          { detail: "All required fields must be provided" },
          { status: 400 }
        );
      }

      const [result] = await connection.execute(
        `INSERT INTO marketplace
        (farmer_id, crop_name, quantity, price, location, contact, image)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          farmer_id,
          crop_name,
          quantity,
          price,
          location,
          contact,
          image || null
        ]
      );

      return Response.json({
        id: result.insertId,
        farmer_id,
        crop_name,
        quantity,
        price,
        location,
        contact,
        image: image || null
      });
    }

    // =========================
    // GET ALL MARKETPLACE ITEMS
    // GET /marketplace
    // =========================
    if (request.method === "GET" && !marketplaceId) {
      const [rows] = await connection.execute(
        `SELECT
          id,
          farmer_id,
          crop_name,
          quantity,
          price,
          location,
          contact,
          image
        FROM marketplace`
      );

      return Response.json(rows);
    }

    // =========================
    // GET ONE MARKETPLACE ITEM
    // GET /marketplace/{id}
    // =========================
    if (request.method === "GET" && marketplaceId) {
      const [rows] = await connection.execute(
        `SELECT
          id,
          farmer_id,
          crop_name,
          quantity,
          price,
          location,
          contact,
          image
        FROM marketplace
        WHERE id = ?
        LIMIT 1`,
        [marketplaceId]
      );

      if (rows.length === 0) {
        return Response.json(
          { detail: "Marketplace item not found" },
          { status: 404 }
        );
      }

      return Response.json(rows[0]);
    }

    // =========================
    // DELETE MARKETPLACE ITEM
    // DELETE /marketplace/{id}
    // =========================
    if (request.method === "DELETE" && marketplaceId) {
      const [result] = await connection.execute(
        `DELETE FROM marketplace
         WHERE id = ?`,
        [marketplaceId]
      );

      if (result.affectedRows === 0) {
        return Response.json(
          { detail: "Marketplace item not found" },
          { status: 404 }
        );
      }

      return Response.json({
        message: "Marketplace item deleted successfully"
      });
    }

    return Response.json(
      { detail: "Method not allowed" },
      { status: 405 }
    );

  } catch (error) {
    console.error("MARKETPLACE ERROR:", error);

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