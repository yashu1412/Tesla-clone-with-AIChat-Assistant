const pool = require("../config/database");
const bcrypt = require("bcryptjs");

// Create Users Table if not exists
const createUsersTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      region VARCHAR(100),
      language VARCHAR(50),
      role VARCHAR(50) NOT NULL DEFAULT 'customer', -- 'customer', 'employee', 'admin'
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      deleted_at TIMESTAMP NULL
    );
  `;
  await pool.query(query);
  console.log("✅ Users table created (with roles)");
};

// Run once when the file is loaded
createUsersTable();

const User = {
  // Create a new user
  create: async ({ first_name, last_name, email, password, region, language, role = 'customer' }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `
      INSERT INTO users (first_name, last_name, email, password, region, language, role)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id, first_name, last_name, email, region, language, role, created_at;
    `;
    const values = [first_name, last_name, email, hashedPassword, region, language, role];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  // Retrieve all active users
  findAll: async () => {
    const query = `SELECT * FROM users WHERE deleted_at IS NULL ORDER BY created_at DESC;`;
    const result = await pool.query(query);
    return result.rows;
  },

  // Find user by id
  findById: async (id) => {
    const query = `SELECT * FROM users WHERE id = $1 AND deleted_at IS NULL;`;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  },

  // Get all users (optionally include soft-deleted users)
  getAllUsers: async (includeDeleted = false) => {
    let query = `SELECT id, first_name, last_name, email, region, language, role, created_at, updated_at FROM users`;
    if (!includeDeleted) {
      query += ` WHERE deleted_at IS NULL`;
    }
    query += ` ORDER BY created_at DESC;`;

    const result = await pool.query(query);
    return result.rows;
  },

  // Find user by email
  findByEmail: async (email) => {
    const query = `SELECT * FROM users WHERE email = $1 AND deleted_at IS NULL;`;
    const result = await pool.query(query, [email]);
    return result.rows[0];
  },

  // Update user fields
  update: async (id, { first_name, last_name, email, region, language, role }) => {
    const query = `
      UPDATE users SET 
        first_name = $1,
        last_name = $2,
        email = $3,
        region = $4,
        language = $5,
        role = $6,
        updated_at = NOW()
      WHERE id = $7 AND deleted_at IS NULL
      RETURNING *;
    `;
    const values = [first_name, last_name, email, region, language, role, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  // // Soft delete a user (set deleted_at)
  // softDelete: async (id) => {
  //   const query = `UPDATE users SET deleted_at = NOW() WHERE id = $1 RETURNING *;`;
  //   const result = await pool.query(query, [id]);
  //   return result.rows[0];
  // },

  // Compare plain password with hashed
  validatePassword: async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
  },
  // Add this method below existing methods in your User object
changeRole: async (id, newRole) => {
  const validRoles = ["admin", "employee", "customer"];
  if (!validRoles.includes(newRole)) {
    throw new Error("Invalid role");
  }

  const query = `
    UPDATE users 
    SET role = $2,
        updated_at = NOW()
    WHERE id = $1 AND deleted_at IS NULL
    RETURNING id, first_name, last_name, email, role, updated_at;
  `;
  const result = await pool.query(query, [id, newRole]);
  return result.rows[0];
},
};

module.exports = User;
