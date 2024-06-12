# Back-End do Sistema de Pedido Online para Pizzaria

![Node](https://img.shields.io/badge/Node-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Visão Geral:

Esta é uma API Restful desenvolvida em Node.js para gerenciar os pedidos realizados por usuários da PizzarIA. A API registra usuários, faz controle de acesso e fornece dados do cardápio e depoimentos dos usuários para o frontend do sistema.

Link da PizzarIA: https://pizzar-ia.vercel.app/

## Funcionalidades Principais

### 1. Cadastro de Usuário

- **Recepção e Validação de Dados:** Recebe os dados do usuário do frontend e realiza a validação necessária.
- **Armazenamento Seguro:** Utiliza bcrypt para criptografar a senha antes de armazená-la no banco de dados.

### 2. Login de Usuário

- **Autenticação:** Autentica os usuários através do e-mail e senha fornecidos.
- **Token JWT:** Gera e retorna um token JWT para autenticação posterior.

### 3. Autenticação com JWT

- **Geração e Verificação de Tokens:** Utiliza o pacote jsonwebtoken para a geração e verificação de tokens JWT.

### 4. Proteção de Rotas

- **Middleware:** Protege rotas sensíveis verificando a autenticidade do token JWT em cada requisição.

### 5. Gerenciamento de Sessão

- **Sessão Ativa:** Mantém a sessão do usuário ativa enquanto o token JWT não expirar.
- **Tokens Expirados:** Implementa um mecanismo para lidar com tokens expirados.

### 6. Listagem de Pizzas

- **Fornecimento de Dados:** Fornece os dados das pizzas disponíveis no cardápio para o frontend.

### 7. Persistência de Dados

- **Query Builder:** Utiliza o Knex.js como query builder para interagir com o banco de dados PostgreSQL.

## Tecnologias Utilizadas:

- Node.js
- Express
- TypeScript
- PostgreSQL
- cors
- dotenv
- knex
- bcrypt
- jsonwebtoken

## Pré-requisitos

Para rodar o projeto localmente, antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [VSCode](https://code.visualstudio.com/).

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/VictorParizio/pizzaria-backend.git
   
   ```
2. Acesse a pasta do projeto no terminal:
   ```bash
   cd pizzaria-backend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

1. Execute a aplicação:
   ```bash
   npm run dev
   ```
2. Acesse no seu navegador:
   ```plaintext
   http://localhost:3000/
   ```
