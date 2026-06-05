# 🏃‍♂️ Tracker de Treinos - App Mobile (Frontend)

Este é o aplicativo mobile construído em **React Native** utilizando a plataforma **Expo** para gerenciar e visualizar o desempenho físico dos atletas.

## 🚀 Pré-requisitos

Antes de começar, você precisará de:
* **Node.js** instalado no computador
* Aplicativo **Expo Go** instalado no seu celular (disponível na Google Play Store ou Apple App Store)

## 🛠️ Instalação

1. Acesse a pasta do aplicativo mobile:
   ```bash
   cd mobile

   instalação de dependências

   npm install

   🔗 Vinculação com o Backend
Abra o arquivo App.js e certifique-se de que a constante API_URL está apontando exatamente para o IP local (IPv4) da sua máquina na mesma rede Wi-Fi que o seu celular:

const API_URL = 'http://SEU_IP_LOCAL:3000/api/treinos';

▶️ Execução
Para iniciar o servidor do Expo bundler:

Bash
npx expo start
Ou, caso use os scripts configurados no package.json:

Bash
npm start


📲 Como testar no Celular
Certifique-se de que seu celular e o computador estão conectados na mesma rede Wi-Fi.

Após rodar o comando de execução, um QR Code aparecerá no terminal.

Abra a câmera do seu celular (ou o app Expo Go no Android) e escaneie o código.

O app será compilado e abrirá diretamente na tela do seu aparelho!


