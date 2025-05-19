import * as reportModel from '../models/reportModel.js';
import handleAsync from '../utils/handleAsync.js';
import AppError from '../utils/appError.js';

export const getReports = handleAsync(async (req, res) => {
  const reports = await reportModel.getAllReports();
  res.status(200).json({ status: 'success', data: reports });
});

export const getReport = handleAsync(async (req, res) => {
  const report = await reportModel.getReportById(req.params.id);
  if (!report) throw new AppError('Report not found', 404);
  res.status(200).json({ status: 'success', data: report });
});

export const createReport = handleAsync(async (req, res) => {
  const report = await reportModel.createReport(req.body);
  res.status(201).json({ status: 'success', data: report });
});

export const updateReport = handleAsync(async (req, res) => {
  const updated = await reportModel.updateReportById(req.params.id, req.body);
  res.status(200).json({ status: 'success', data: updated });
});

export const deleteReport = handleAsync(async (req, res) => {
  const deleted = await reportModel.deleteReportById(req.params.id);
  if (!deleted) throw new AppError('Not found', 404);
  res.status(200).json({ status: 'success', message: 'Deleted' });
});
