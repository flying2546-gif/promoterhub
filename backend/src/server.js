import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API Routes (to be implemented)
app.get('/api/v1/campaigns', (req, res) => {
  res.json({ message: 'GET campaigns - Coming soon' });
});

app.post('/api/v1/campaigns', (req, res) => {
  res.json({ message: 'POST campaign - Coming soon' });
});

app.get('/api/v1/categories', (req, res) => {
  res.json({ message: 'GET categories - Coming soon' });
});

app.post('/api/v1/track', (req, res) => {
  res.json({ message: 'Track interaction - Coming soon' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
  console.log(`📚 API Documentation at http://localhost:${PORT}/api/v1/health`);
});
