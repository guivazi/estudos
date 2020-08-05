const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Word');
});

app.get('/teste', (req,res)=>{
    res.send('Teste de rota')
})

app.listen(port, () => {
    console.log(`Servidor rodando http://localhost:${port}`)
})