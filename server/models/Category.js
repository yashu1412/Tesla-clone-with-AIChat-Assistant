const pool = require("../config/database");

// Create Categories Table if not exists
const createCategoriesTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS categories (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name VARCHAR(100) NOT NULL,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      deleted_at TIMESTAMP NULL
    );
  `;
  await pool.query(query);
  console.log("✅ Categories table ensured");
};

const Category = {
  create: async ({ name, description }) => {
    const query = `
      INSERT INTO categories (name, description)
      VALUES ($1, $2)
      RETURNING *;
    `;
    const result = await pool.query(query, [name, description]);
    return result.rows[0];
  },

  findAll: async () => {
    const result = await pool.query(
      `SELECT * FROM categories WHERE deleted_at IS NULL ORDER BY created_at DESC;`
    );
    return result.rows;
  },

  findById: async (id) => {
    const result = await pool.query(
      `SELECT * FROM categories WHERE id = $1 AND deleted_at IS NULL;`,
      [id]
    );
    return result.rows[0];
  },

  findByName: async (name) => {
    const result = await pool.query(
      `SELECT * FROM categories WHERE name = $1 AND deleted_at IS NULL;`,
      [name]
    );
    return result.rows[0];
  },

  update: async (id, { name, description }) => {
    const query = `
      UPDATE categories SET 
        name = $1,
        description = $2,
        updated_at = NOW()
      WHERE id = $3 AND deleted_at IS NULL
      RETURNING *;
    `;
    const result = await pool.query(query, [name, description, id]);
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await pool.query(
      `UPDATE categories SET deleted_at = NOW() WHERE id = $1 RETURNING *;`,
      [id]
    );
    return result.rows[0];
  }
};

// Ensure the table exists when the model file loads
createCategoriesTable().catch((error) =>
  console.error("❌ Failed to ensure categories table:", error)
);

module.exports = Category;
