import express from 'express';
import * as reportController from '../controllers/reportController.js';

const router = express.Router();

router
  .route('/reports')
  .get(reportController.getReports)
  .post(reportController.createReport);

router
  .route('/reports/:id')
  .get(reportController.getReport)
  .patch(reportController.updateReport)
  .delete(reportController.deleteReport);

export default router;
