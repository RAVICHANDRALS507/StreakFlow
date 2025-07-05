import express from 'express'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config();
connectDB();

app.use(cors({
  origin: 'https://streak-flow-mk6xkeanj-ravichandra-l-ss-projects.vercel.app',
  credentials: true
}))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running!')
})

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`)
})