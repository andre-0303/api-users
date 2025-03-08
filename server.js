import express, { response } from 'express'

const app = express();

app.use(express.json());

const PORT = 3000;

const users = [];

app.get('/', (req, res) => {
    res.send('Rota raiz da aplicação')
});

app.get('/users', (req, res) => {
    return response.json(users);
})

app.post('/users', (req, res) => {
    const {name, age, nickName} = req.body;

    users.push({name, age, nickName});

    return response.json({name, age, nickName});
})

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
})