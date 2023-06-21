// Utilizando a biblioteca EXPRESS para facilitar a criação do código.
// Utilizando a biblioteca NODEMON para realizar iniciar o servidor sempre que acontecer um save
const express = require("express");

// Iniciando a biblioteca
const app = express();

// Gerando array vazia para servir de banco de dados
const produto = [];

// Definindo qual a rota retorna determinada mensagem sem if e else

/***************************
app.get("/primeira-rota", (request, response) => {
    //return response.json({
        //message: "Acessou a primeira rota com nodemon.",
    //});
}) 
****************************/

// POST = Inserir 
// GET = Buscar
// PUT = Alterar
// DELETE = Remover

app.post("/produtos", (request, response) => {
    // Nome e preço
})

// Retorno
app.listen(4002, () => console.log("Servidor está rodando na porta 4002."));