import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (_req, res) => {
    res.send({ message: 'Hello from Express + TypeScript!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
