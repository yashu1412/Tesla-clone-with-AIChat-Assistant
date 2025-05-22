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
  console.log("✅ Categories table created");
};

createCategoriesTable();

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
    const query = `SELECT * FROM categories WHERE deleted_at IS NULL ORDER BY created_at DESC;`;
    const result = await pool.query(query);
    return result.rows;
  },

  findById: async (id) => {
    const query = `SELECT * FROM categories WHERE id = $1 AND deleted_at IS NULL;`;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  },

  findByName: async (name) => {
    const query = `SELECT * FROM categories WHERE name = $1 AND deleted_at IS NULL;`;
    const result = await pool.query(query, [name]);
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
    const query = `UPDATE categories SET deleted_at = NOW() WHERE id = $1 RETURNING *;`;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
};

module.exports = Category;
