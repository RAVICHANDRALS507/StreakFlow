import express from 'express'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config();
connectDB();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running!')
})

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`)
})