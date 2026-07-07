const path = require('path');
const express = require('express');

const app = express();
const port = 3000;
const siteRoot = path.join(__dirname, '..');

app.use(express.static(siteRoot));

app.get('/dados', (req, res) => {
  res.json({
    nome: 'Jeferson Vinicius (Back-end)',
    texto: 'Uma pagina para contar minha caminhada, meus valores e a energia que coloco em cada etapa da minha evolucao profissional e pessoal. Vem do servidor',
    cargo: 'Desenvolvedor em evolucao',
    cidade: 'Brasil'
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});