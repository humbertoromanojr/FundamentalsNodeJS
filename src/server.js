import http from "node:http";

import { json } from "./middlewares/json.js";

// Get => Buscar um recurso do backend
// POST => Criar um recurso do backend
// PUT => Atualizar um recurso no backend
// PATCH => Atualizar uma informação específica de um recurso no backend
// DELETE => Deletar um recurso no backend

// Get /users => Buscando usuários do backend
// POST /users => Criar um usuário no backend

// Stateful ------- Stateless

// JSON - Javascript Object Notation

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;

    users.push({
      id: 1,
      name,
      email,
    });

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3001, () => {
  console.log("Server runner now in port 3001");
});
