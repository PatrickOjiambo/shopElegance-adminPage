import { validationResult } from 'express-validator';

export const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty == false) {
    return res.status(400).json({
      errors: errors.array()
    });
  }
  next();
};