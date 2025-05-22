const pool = require("../config/database");

const createSubCategoriesTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS subcategories (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name VARCHAR(100) NOT NULL,
      description TEXT,
      category_name VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      deleted_at TIMESTAMP NULL
    );
  `;
  await pool.query(query);
  console.log("✅ SubCategories table created");
};

createSubCategoriesTable();

const SubCategory = {
  create: async ({ name, description, category_name }) => {
    const query = `
      INSERT INTO subcategories (name, description, category_name)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const result = await pool.query(query, [name, description, category_name]);
    return result.rows[0];
  },

  findAll: async () => {
    const query = `
      SELECT * FROM subcategories
      WHERE deleted_at IS NULL 
      ORDER BY created_at DESC;
    `;
    const result = await pool.query(query);
    return result.rows;
  },

  findById: async (id) => {
    const query = `
      SELECT * FROM subcategories
      WHERE id = $1 AND deleted_at IS NULL;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  },

  findByCategory: async (category_name) => {
    const query = `
      SELECT * FROM subcategories 
      WHERE category_name = $1 AND deleted_at IS NULL 
      ORDER BY created_at DESC;
    `;
    const result = await pool.query(query, [category_name]);
    return result.rows;
  },

  update: async (id, { name, description, category_name }) => {
    const query = `
      UPDATE subcategories SET 
        name = $1,
        description = $2,
        category_name = $3,
        updated_at = NOW()
      WHERE id = $4 AND deleted_at IS NULL
      RETURNING *;
    `;
    const result = await pool.query(query, [name, description, category_name, id]);
    return result.rows[0];
  },

  delete: async (id) => {
    const query = `
      UPDATE subcategories 
      SET deleted_at = NOW() 
      WHERE id = $1 
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
};

module.exports = SubCategory;