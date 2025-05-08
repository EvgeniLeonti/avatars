import express, { Request, Response } from 'express';
import { createAvatar } from '@dicebear/core';
import { funEmoji } from '@dicebear/collection';

const app = express();
const PORT = process.env.PORT ?? 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (_req: Request, res: Response) => {
    res.send({ message: 'Hello from Express + TypeScript!' });
});

app.get('/user-avatar', (req: any, res: any) => {
    const name = req.query.name as string;
    const bgColorInput = req.query.backgroundColor as string;

    if (!name) {
        return res.status(400).send({ error: 'Name is a mandatory query parameter.' });
    }

    // Default to a light orange if not provided. Ensure no # prefix.
    const validatedBgColor = bgColorInput ? bgColorInput.replace('#', '') : 'FFDBAC';

    const avatar = createAvatar(funEmoji, {
        seed: name,
        backgroundColor: [validatedBgColor],
        radius: 50, // For a circular avatar
        size: 100, // 100x100px
    });

    const svg = avatar.toString();

    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(svg);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
