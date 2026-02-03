import express from 'express';
import cors from 'cors';
import programRoutes from './routes/programRoutes';
import serviceRoutes from './routes/serviceRoutes';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/programs', programRoutes);
app.use('/api/services', serviceRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'C.O.R.E. Nervous System Online' });
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: C.O.R.E. Backend running at http://localhost:${PORT}`);
});
