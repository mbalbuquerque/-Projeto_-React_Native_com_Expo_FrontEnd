const Treino = require('../models/Treino');

// Criar Treino (POST)
exports.createTreino = async (req, res) => {
  try {
    // Desestruturando para garantir que apenas os campos do nosso modelo sejam salvos
    const { atleta, tipo, distancia, duracao, observacoes } = req.body;

    const novoTreino = new Treino({
      atleta,
      tipo,
      distancia,
      duracao,
      observacoes
    });

    const treinoSalvo = await novoTreino.save();
    res.status(201).json(treinoSalvo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Listar Todos os Treinos (GET)
exports.getTreinos = async (req, res) => {
  try {
    const treinos = await Treino.find().sort({ data: -1 });
    res.status(200).json(treinos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ... existente
// Atualizar Treino (PUT)
exports.updateTreino = async (req, res) => {
  try {
    const { id } = req.params;
    const { atleta, tipo, distancia, duracao, observacoes } = req.body;

    // Montando o objeto apenas com os campos permitidos para atualização
    const dadosAtualizados = {
      atleta,
      tipo,
      distancia,
      duracao,
      observacoes
    };

    const treinoAtualizado = await Treino.findByIdAndUpdate(
      id, 
      dadosAtualizados, 
      { new: true, runValidators: true } // runValidators garante que as regras do Schema (como o enum) sejam checadas
    );

    if (!treinoAtualizado) return res.status(404).json({ message: 'Treino não encontrado' });
    res.status(200).json(treinoAtualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Excluir Treino (DELETE)
exports.deleteTreino = async (req, res) => {
  try {
    const { id } = req.params;
    const treinoExcluido = await Treino.findByIdAndDelete(id);
    if (!treinoExcluido) return res.status(404).json({ message: 'Treino não encontrado' });
    res.status(200).json({ message: 'Treino deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};