import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { DEFAULT_AVATAR_BACKGROUND_COLOR, DEFAULT_AVATAR_RADIUS, DEFAULT_AVATAR_SIZE } from '../config/avatarConfig.js';
import { generateAvatarSvg } from '../services/avatarService.js';

export const getUserAvatar = (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const name = req.query.name as string;
    const bgColorInput = req.query.backgroundColor as string | undefined;

    const validatedBgColor = bgColorInput ? bgColorInput.replace('#', '') : DEFAULT_AVATAR_BACKGROUND_COLOR;

    const svg = generateAvatarSvg({
        seed: name,
        backgroundColor: validatedBgColor,
        radius: DEFAULT_AVATAR_RADIUS,
        size: DEFAULT_AVATAR_SIZE,
    });

    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(svg);
}; 