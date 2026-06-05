const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const treinoRoutes = require('./routes/treinoRoutes');

dotenv.config();
connectDB();

const app = express();

// 🚨 ESSA LINHA É OBRIGATÓRIA PARA O POST FUNCIONAR:
app.use(express.json()); 
app.use(cors());

// Rotas
app.use('/api/treinos', treinoRoutes);

module.exports = app;