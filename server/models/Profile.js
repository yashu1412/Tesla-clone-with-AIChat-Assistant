const pool = require("../config/database");

const Profile = {
  // Get user profile by ID
  getById: async (id) => {
    const query = `SELECT id, first_name, last_name, email, region, language, role, created_at, updated_at 
                   FROM users 
                   WHERE id = $1 AND deleted_at IS NULL;`;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  },

  // Update user profile
  update: async (id, { first_name, last_name, region, language }) => {
    const query = `
      UPDATE users 
      SET 
        first_name = COALESCE($2, first_name),
        last_name = COALESCE($3, last_name),
        region = COALESCE($4, region),
        language = COALESCE($5, language),
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $1 AND deleted_at IS NULL
      RETURNING id, first_name, last_name, email, region, language, role, updated_at;
    `;
    const values = [id, first_name, last_name, region, language];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
};

module.exports = Profile;
