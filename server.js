import express, { response } from "express";
import mongoose from "mongoose";

import User from "./models/User.js";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Rota raiz da aplicação");
});

app.get("/users", async (req, res) => {
  const users = await User.find();

  return res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const { nickName, name, age } = req.body;

    if (!nickName || !name || !age) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios!" });
    }

    const user = new User({ nickName, name, age });
    await user.save();
    res.status(201).json({ message: "Usuário criado com sucesso!", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/users/:nickName", async (req, res) => {
  try {
    const { nickName } = req.params;
    const { name, age } = req.body;

    if (!name || !age) {
      return res.status(400).json({ error: "Nome e idade são obrigatórios!" });
    }

    const user = await User.findOneAndUpdate(
      { nickName }, // Busca pelo nickName
      { name, age }, // Atualiza os campos
      { new: true } // Retorna o documento atualizado
    );

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado!" });
    }

    res.status(200).json({ message: "Usuário atualizado com sucesso!", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para deletar um usuário pelo nickName (DELETE)
app.delete("/users/:nickName", async (req, res) => {
  try {
    const { nickName } = req.params;

    const user = await User.findOneAndDelete({ nickName });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado!" });
    }

    res.status(200).json({ message: "Usuário deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://andre:23042024Ma@cluster0.vuym1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("✔️  Banco de dados conectado!");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) =>
    console.error("❌ Falha ao conectar com o banco de dados", err)
  );
