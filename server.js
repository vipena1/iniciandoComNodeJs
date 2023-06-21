// Importando biblioteca HTTP do NODE
const http = require("node:http");


// Criando um servidor HTTP
const server = http.createServer((request, response) => {
    // Informando o status do retorno "200 = sucesso", informando o tipo de retorno que será retornado "arquivo texto"
    /*response.writeHead(200, { 'Content-Type': 'text/plain' }); */
    // O que será retornado de fato para o usuário
    /*response.end('okay'); */

    // Informando o status do retorno "200 = sucesso", informando o tipo de retorno que será retornado "arquivo JSON"
    response.writeHead(200, { "Content-Type": "application/json" });

    // O que será retornado de fato para o usuário "Retorno em formato JSON"
    // Condisão para alterações da URL
    if (request.url === "/produto") {
        response.end(
            JSON.stringify({
                message: "Rota de produto.",
            })
        );
    }

    else if (request.url === "/usuario") {
        response.end(
            JSON.stringify({
                message: "Rota de usuário.",
            })
        );
    }

    // Se for qualquer coisa que não esteja no if ira retornar:
    else {

        response.end(
            JSON.stringify({
                message: "Qualquer outra rota.",
            })
        );
    }
})


// Direcionando porta 4001 para ser "escutada/reproduzida"
server.listen(4001, () => console.log("Servidor está rodando na porta 4001"));

