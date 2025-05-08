import { Router } from 'express';
import { query } from 'express-validator';
import { getUserAvatar } from '../controllers/avatarController.js';

const router = Router();

router.get('/user-avatar',
    [
        query('name')
            .isString()
            .withMessage('Name must be a string.')
            .trim()
            .notEmpty()
            .withMessage('Name is a mandatory query parameter.')
            .isLength({ max: 50 })
            .withMessage('Name must be 50 characters or less.'),
        query('backgroundColor')
            .optional()
            .isString()
            .withMessage('Background color must be a string.')
            .trim()
            .isHexColor()
            .withMessage('Background color must be a valid hex color code (e.g., FFDBAC).')
    ],
    getUserAvatar
);

export default router; 