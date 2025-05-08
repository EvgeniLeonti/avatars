import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

import express, { Request, Response } from 'express';
import { DEFAULT_PORT } from './config/appConfig.js';
import avatarRoutes from './routes/avatarRoutes.js';

const app = express();
const PORT = process.env.PORT ?? DEFAULT_PORT;

// Middleware
app.use(express.json());

// Routes
app.get('/', (_req: Request, res: Response) => {
    res.send({ message: 'Hello from Express + TypeScript!' });
});

app.use(avatarRoutes); // Mount the avatar routes

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
