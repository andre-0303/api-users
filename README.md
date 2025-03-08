# 📚 API de Usuários

Uma API RESTful simples para gerenciamento de usuários utilizando **Node.js**, **Express** e **MongoDB**.

## 📌 Funcionalidades
- Criar um usuário
- Listar todos os usuários
- Atualizar um usuário pelo **nickName**
- Deletar um usuário pelo **nickName**

## 🛠️ Tecnologias Utilizadas
- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**

## 📂 Estrutura do Projeto
```
.
├── models
│    └── User.js
├── node_modules
├── .gitignore
└── index.js
```

## 🚀 Como Executar o Projeto

### 1. Clonar o Repositório
```bash
git clone https://github.com/andre-0303/api-users.git
cd api-usuarios
```

### 2. Instalar as Dependências
```bash
npm install
```

### 3. Configurar o Banco de Dados
Certifique-se de ter um cluster do MongoDB Atlas ou uma instância local do MongoDB.

Exemplo de conexão em `server.js`:
```js
mongoose.connect('mongodb://seu-usuario:senha@seu-cluster.mongodb.net/seu-banco');
```

### 4. Iniciar o Servidor
```bash
npm start
```
O servidor estará rodando em: `http://localhost:3000`

## 📊 Rotas da API

### 1. Rota Principal
```
GET /
```
- Resposta:
```json
"Rota raiz da aplicação"
```

### 2. Criar um Usuário
```
POST /users
```
- Corpo da Requisição:
```json
{
  "nickName": "andre123",
  "name": "André",
  "age": 25
}
```
- Resposta de Sucesso:
```json
{
  "message": "Usuário criado com sucesso!",
  "user": {
    "_id": "65f3a7f8e1b5a7a9d9d1a5f2",
    "nickName": "andre123",
    "name": "André",
    "age": 25
  }
}
```

### 3. Listar Todos os Usuários
```
GET /users
```
- Resposta de Sucesso:
```json
[
  {
    "_id": "65f3a7f8e1b5a7a9d9d1a5f2",
    "nickName": "andre123",
    "name": "André",
    "age": 25
  }
]
```

### 4. Atualizar um Usuário (pelo nickName)
```
PUT /users/:nickName
```
- Exemplo: `/users/andre123`

- Corpo da Requisição:
```json
{
  "name": "André Silva",
  "age": 30
}
```
- Resposta de Sucesso:
```json
{
  "message": "Usuário atualizado com sucesso!",
  "user": {
    "_id": "65f3a7f8e1b5a7a9d9d1a5f2",
    "nickName": "andre123",
    "name": "André Silva",
    "age": 30
  }
}
```

### 5. Deletar um Usuário (pelo nickName)
```
DELETE /users/:nickName
```
- Exemplo: `/users/andre123`

- Resposta de Sucesso:
```json
{
  "message": "Usuário deletado com sucesso!"
}
```

## 📌 Melhorias Futuras
- Adicionar autenticação com JWT
- Implementar paginação na listagem de usuários
- Criar testes automatizados


