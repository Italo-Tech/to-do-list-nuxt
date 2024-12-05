# Projeto Task Manager 🗂️ - Nuxt 3

ask Manager é uma aplicação web construída com Nuxt 3, Pinia, Sequelize e MySQL, que permite aos usuários gerenciar suas tarefas de maneira eficiente. O projeto oferece funcionalidades essenciais para criação, leitura, atualização e exclusão de tarefas (CRUD), permitindo que o usuário adicione, edite, visualize e remova tarefas com facilidade.

O sistema conta com uma interface simples e responsiva, baseada em Bootstrap 5, e utiliza SweetAlert para fornecer feedbacks visuais claros e amigáveis. As animações são garantidas pelo Animate.css, tornando a experiência do usuário ainda mais dinâmica e interativa.

Além disso, a aplicação oferece validação de datas, impedindo que o usuário insira datas anteriores à data atual. Tudo isso é suportado por uma base de dados relacional MySQL, onde as tarefas são armazenadas e gerenciadas de maneira eficiente.

Este projeto é uma ótima escolha para quem precisa de uma solução simples e eficaz para o gerenciamento de tarefas e está em busca de uma aplicação prática utilizando as tecnologias mais modernas do ecossistema JavaScript.

## 🚀 Tecnologias Utilizadas

- **[Nuxt 3](https://nuxt.com/docs)**: Framework Vue.js para criação de aplicações universais.
- **[Sequelize](https://sequelize.org/)**: ORM (Object-Relational Mapping) para Node.js, utilizado para interagir com o banco de dados MySQL.
- **[Pinia](https://pinia.vuejs.org/)**: Gerenciamento de estado para aplicações Vue.js (substituto do Vuex).
- **[SweetAlert2](https://sweetalert2.github.io/)**: Biblioteca de alertas bonitos e customizáveis para feedbacks.
- **[Animate.css](https://animate.style/)**: Biblioteca de animações CSS.
- **[MySQL](https://www.mysql.com/)**: Sistema de gerenciamento de banco de dados relacional.
- **[Bootstrap 5](https://getbootstrap.com/)**: Framework de design responsivo para criar layouts modernos e acessíveis.

## 📋 Funcionalidades

**Criação de tarefas diárias**: Configure detalhes como título, descrição, data e status.

### Pré-requisitos

Certifique-se de ter as ferramentas abaixo instaladas:
- **Node.js** (versão 18 ou superior)
- **Gerenciador de pacotes**: npm ou yarn
- **Banco de Dados**: MySQL

## Setup

1. **Clone o repositório**:
   ```bash
   git clone clone https://github.com/Italo-Tech/to-do-list-nuxt.git
   cd to-do-list-nuxt
    ```
2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```
4. **Banco de Dados: Certifique-se de ter o banco configurado e migrações aplicadas**:
   ```bash
   cd server/
   npx sequelize-cli db:migrate
   ```
4. **Execute a Aplicação**:

   ```bash
   npm run dev
   ```
