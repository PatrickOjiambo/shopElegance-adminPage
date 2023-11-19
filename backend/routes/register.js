import express from 'express';
import { body } from 'express-validator';
import { validator } from '../middleware/validation.js';
import { register } from '../controller/registerC.js';
const router = express.Router();

router.post('/', [
  body('password', 'password should be atleast 8 characters').isLength({
    min: 8
  }),
  body('email', 'Enter a valid email').isEmail(),
  body('phone_number', 'Enter a valid phone number').isMobilePhone(),
  body('password_confirmation', 'Passwords do not match').custom(
    (value, { req }) => {
      return value === req.body.password;
    }
  ),
  body('first_name', 'First name is too long').isLength({ max: 45 }),
  body('last_name', 'Last name is too long').isLength({ max: 45 })
], validator,
register
);
export default router;