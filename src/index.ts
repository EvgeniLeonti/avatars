import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

import express, { Request, Response } from 'express';
import path from 'path'; // Added for serving static files
import { fileURLToPath } from 'url'; // Added for ES module __dirname equivalent
import { DEFAULT_PORT } from './config/appConfig.js';
import avatarRoutes from './routes/avatarRoutes.js';

const app = express();
const PORT = process.env.PORT ?? DEFAULT_PORT;

// ES module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public'))); // Serve files from project_root/public

// Routes
app.get('/', (_req: Request, res: Response) => {
    // Send the index.html for the main route
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use(avatarRoutes); // Mount the avatar routes

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
