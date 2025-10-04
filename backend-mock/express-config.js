const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // para aceitar JSON no body

///api/animais?page=3
app.get('/api/animais', (req, res) => {
  const filePath = path.join(__dirname, 'json/animais.json');
  const page = parseInt(req.query.page) || 1;
  const limit = 16;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
       return res.status(500).json({
        code: 500,
        status: "error",
        message: "Erro ao carregar os dados dos animais",
        data: null
      });
    }

    try {
      const allAnimais = JSON.parse(data);
      const paginatedAnimais = allAnimais.slice(startIndex, endIndex);
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "Lista de animais retornada com sucesso",
        page: page,
        totalPages: Math.ceil(allAnimais.length / limit),
        totalItems: allAnimais.length,
        data: paginatedAnimais
      });

    } catch (parseError) {
      return res.status(500).json({
        code: 500,
        status: "error",
        message: "Erro ao interpretar os dados dos animais",
        data: null
      });
    }
  });
});

app.get('/api/galeria', (req, res) => {      
  const filePath = path.join(__dirname, 'json/galeria.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({
        code: 500,
        status: "error",
        message: "Erro ao carregar os dados dos galeria",
        data: null
      });
    }

    try {
      const galeria = JSON.parse(data);
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "Galeria retornada com sucesso",
        data: galeria
      });

    } catch (parseError) {
       return res.status(500).json({
        code: 500,
        status: "error",
        message: "Erro ao interpretar galeria de fotos",
        data: null
      });
    }
  });
});

app.get('/api/locais', (req, res) => {      
  const filePath = path.join(__dirname, 'json/locais.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({
        code: 500,
        status: "error",
        message: "Erro ao carregar os dados dos locais",
        data: null
      });
    }

    try {
      const locais = JSON.parse(data);
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "locais retornada com sucesso",
        data: locais
      });

    } catch (parseError) {
       return res.status(500).json({
        code: 500,
        status: "error",
        message: "Erro ao interpretar locais",
        data: null
      });
    }
  });
});

app.post('/api/doacao/doar', (req, res) => {
    const data = req.body;
    try {
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "Doação realizada com sucesso",
        data: data
      });

    } catch (parseError) {
       return res.status(500).json({
        code: 500,
        status: "error",
        message: "Erro ao Doar",
        data: null
      });
    }
});

app.post('/api/castracao/cadastrar', (req, res) => {
    const data = req.body;
    try {
      return res.status(200).json({
        code: 201,
        status: "success",
        message: "Cadastrado com sucesso",
        data: data
      });

    } catch (parseError) {
       return res.status(500).json({
        code: 500,
        status: "error",
        message: "Erro ao Cadastrar",
        data: null
      });
    }
});

app.post('/api/adocao/adotar', (req, res) => {
    const data = req.body;
    try {
      return res.status(200).json({
        code: 201,
        status: "success",
        message: "Adotado com sucesso",
        data: data
      });

    } catch (parseError) {
       return res.status(500).json({
        code: 500,
        status: "error",
        message: "Erro ao Adotar",
        data: null
      });
    }
});


//Outros Exemplos
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'João' },
    { id: 2, name: 'Maria' }
  ]);
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    res.json({ token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

// Start do servidor
app.listen(PORT, () => {
  console.log(`Mock API rodando em http://localhost:${PORT}`);
});
