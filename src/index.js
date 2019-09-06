const server = require("./server");

//verifica se o servidor envia uma porta atravez da variavel de ambiente PORT
//se não utiliza a 3000
server.listen(process.env.PORT || 3000);
