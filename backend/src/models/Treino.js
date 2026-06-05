const mongoose = require('mongoose');

const TreinoSchema = new mongoose.Schema({
  atleta: {
    type: String,
    required: false, // Deixe false para testar sem travas do banco
    default: 'Atleta Anônimo',
    trim: true
  },
  tipo: {
    type: String,
    enum: ['Corrida', 'Caminhada'],
    required: true
  },
  distancia: {
    type: Number,
    required: true
  },
  duracao: {
    type: String,
    required: true
  },
  observacoes: {
    type: String,
    trim: true
  },
  data: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Treino', TreinoSchema);