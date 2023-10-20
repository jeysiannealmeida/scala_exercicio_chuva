const express = require('express');
const app = express();
const path = require("path");

// Configurar o Express para servir arquivos CSS, JS e imagens com caminhos específicos
app.use(express.static(path.join(__dirname, "public")));

// Rota padrão
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor Express rodando na porta ${port}`);
});
