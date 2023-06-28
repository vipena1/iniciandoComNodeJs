// Utilizando a biblioteca EXPRESS para facilitar a criação do código.
// Utilizando a biblioteca NODEMON para realizar iniciar o servidor sempre que acontecer um save
const express = require("express");
const { randomUUID } = require("crypto");
const { request } = require("http");

// Iniciando a biblioteca
const app = express();

app.use(express.json());

// Gerando array vazia para servir de banco de dados
const produtos = [];

// Definindo qual a rota retorna determinada mensagem sem if e else

/***************************
app.get("/primeira-rota", (request, response) => {
    //return response.json({
        //message: "Acessou a primeira rota com nodemon.",
    //});
}) 
****************************/

// BODY = SEMPRE QUE EU QUISER ENVIAR DADOS PARA MINHA APLICAÇÃO
// PARAMS = /produtos/1652165123
// QUERY = /produtos?id=1651561654&values=239237897

// POST = Inserir 
// GET = Buscar
// PUT = Alterar
// DELETE = Remover

app.post("/produtos", (request, response) => {
    // Nome e preço
    // Permite que pego o nome e o preço realizando a desestruturação
    const { nome, preco } = request.body;

    const produto = {
        nome,
        preco,
        id: randomUUID()
    };

    produtos.push(produto);

    return response.json(produto);
});

app.get("/produtos", (request, response) => {
    return response.json(produtos);
});

// Retorno
app.listen(4002, () => console.log("Servidor está rodando na porta 4002."));