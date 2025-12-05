const pool = require("../config/database");

// Create Products Table if not exists
const createProductsTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS products (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name VARCHAR(100) NOT NULL,
      price NUMERIC(10, 2) NOT NULL,
      description TEXT,
      includes TEXT,
      category VARCHAR(100) NOT NULL,
      subcategory VARCHAR(100) NOT NULL,
      image TEXT,
      tags TEXT[],
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await pool.query(query);
  console.log("✅ Products table ensured");
};

const Product = {
  create: async ({ name, price, description, includes, category, subcategory, image }) => {
    const query = `
      INSERT INTO products (name, price, description, includes, category, subcategory, image)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [name, price, description, includes, category, subcategory, image];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  findAll: async () => {
    const result = await pool.query(`SELECT * FROM products ORDER BY created_at DESC;`);
    return result.rows;
  },

  findById: async (id) => {
    const result = await pool.query(`SELECT * FROM products WHERE id = $1;`, [id]);
    return result.rows[0];
  },

  findByName: async (name) => {
    const result = await pool.query(
      `SELECT * FROM products WHERE LOWER(name) = LOWER($1) LIMIT 1;`,
      [name]
    );
    return result.rows[0];
  },

  findBySubcategory: async (subcategoryName) => {
    const result = await pool.query(
      `SELECT * FROM products WHERE LOWER(subcategory) = LOWER($1) ORDER BY created_at DESC;`,
      [subcategoryName]
    );
    return result.rows;
  },

  findByCategory: async (categoryName) => {
    const result = await pool.query(
      `SELECT * FROM products WHERE LOWER(category) = LOWER($1) ORDER BY created_at DESC;`,
      [categoryName]
    );
    return result.rows;
  },

  update: async (id, { name, price, description, includes, category, subcategory, tags, image }) => {
    const query = `
      UPDATE products 
      SET 
        name = COALESCE($2, name),
        price = COALESCE($3, price),
        description = COALESCE($4, description),
        includes = COALESCE($5, includes),
        category = COALESCE($6, category),
        subcategory = COALESCE($7, subcategory),
        tags = COALESCE($8, tags),
        image = COALESCE($9, image),
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
      RETURNING *;
    `;
    const values = [id, name, price, description, includes, category, subcategory, tags, image];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await pool.query(`DELETE FROM products WHERE id = $1 RETURNING *;`, [id]);
    return result.rows[0];
  }
};

createProductsTable().catch((error) =>
  console.error("❌ Failed to ensure products table:", error)
);

module.exports = Product;
