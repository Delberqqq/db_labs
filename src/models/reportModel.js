import db from '../config/db.js';

export const getAllReports = async () => {
  const res = await db.query('SELECT * FROM AnalysisReport');
  return res.rows;
};

export const getReportById = async (id) => {
  const res = await db.query('SELECT * FROM AnalysisReport WHERE id = $1', [id]);
  return res.rows[0];
};

export const createReport = async ({ title, body, profile_id }) => {
  const res = await db.query(
    `INSERT INTO AnalysisReport (title, body, profile_id) VALUES ($1, $2, $3) RETURNING *`,
    [title, body, profile_id]
  );
  return res.rows[0];
};

export const updateReportById = async (id, data) => {
  const fields = Object.keys(data);
  const values = Object.values(data);
  const setClause = fields.map((f, i) => `${f} = $${i + 1}`).join(', ');
  const res = await db.query(
    `UPDATE AnalysisReport SET ${setClause} WHERE id = $${fields.length + 1} RETURNING *`,
    [...values, id]
  );
  return res.rows[0];
};

export const deleteReportById = async (id) => {
  const res = await db.query('DELETE FROM AnalysisReport WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};
