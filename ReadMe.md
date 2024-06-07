# Sistema de Pedido Online para Pizzaria

## Visão Geral:

Esta é uma API Restful desenvolvida em Node.js para gerenciar os pedidos realizados por usuários da PizzarIA. A API registra usuários, faz controle de acesso e fornece dados do cardápio e depoimentos dos usuários para o frontend do sistema.

Link da PizzarIA: https://pizzar-ia.vercel.app/

## Funcionalidades Principais:

1. **Cadastro de Usuário:**

   - Recebe os dados do usuário do frontend e realiza a validação e armazenamento seguro no banco de dados.
   - Utiliza bcrypt para criptografar a senha antes de armazená-la no banco de dados.

2. **Login de Usuário:**

   - Autentica os usuários através do e-mail e senha fornecidos.
   - Gera e retorna um token JWT para autenticação posterior.

3. **Proteção de Rotas:**

   - Middleware para proteger rotas sensíveis, verificando a autenticidade do token JWT em cada requisição.

4. **Gerenciamento de Sessão:**

   - Mantém a sessão do usuário ativa enquanto o token JWT não expirar.
   - Implementa um mecanismo para lidar com tokens expirados.

5. **Listagem de Pizzas:**

   - Fornece os dados das pizzas disponíveis no cardápio para o frontend.

6. **Autenticação com JWT:**

   - Utiliza o pacote jsonwebtoken para a geração e verificação de tokens JWT.

7. **Persistência de Dados:**

   - Utiliza o Knex.js como query builder para interagir com o banco de dados PostgreSQL.

## Tecnologias Utilizadas:

- Node.js
- Express
- PostgreSQL
- Knex.js
- bcrypt
- jsonwebtoken
