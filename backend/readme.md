# 🏃‍♂️ Registros de Treinos - API (Backend)

Este é o ecossistema de backend da aplicação Tracker de Treinos, construído com Node.js, Express e MongoDB.

## 🚀 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:
* **Node.js** (versão v18 ou superior)
* **npm** ou yarn

## 🛠️ Instalação

1. Acesse a pasta do backend:
   ```bash
   cd backend


   Instalação de Dependências

   npm install


   Configuração (.env)

   Crie um arquivo chamado .env na raiz da pasta backend (se já não existir) e configure as suas variáveis de ambiente:

   PORT=3000
MONGO_URI=mongodb+srv://seu_usuario:sua_senha@cluster.mongodb.net/corrida_app?retryWrites=true&w=majority

▶️ Execução
Para iniciar o servidor de desenvolvimento com o recarregamento automático (nodemon):

npm run dev

O servidor iniciará por padrão na porta 3000. Você verá a mensagem Servidor rodando com sucesso na porta 3000 no terminal.

📡 Rotas Principais
POST /api/treinos - Cadastra um novo treino

GET /api/treinos - Lista todos os treinos em ordem decrescente de data

PUT /api/treinos/:id - Atualiza um treino existente pelo ID

DELETE /api/treinos/:id - Remove um treino pelo ID