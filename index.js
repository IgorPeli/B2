const express = require('express');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const lanceRoutes = require('./src/routes/lanceRoutes');
const leilaoRoutes = require('./src/routes/leilaoRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api', usuarioRoutes);
app.use('/api', lanceRoutes);
app.use('/api', leilaoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});