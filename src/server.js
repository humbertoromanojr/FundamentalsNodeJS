import http from "node:http";
import { randomUUID } from "node:crypto";

import { json } from "./middlewares/json.js";
import { Database } from "./middlewares/database.js";

const database = new Database();

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  if (method === "GET" && url === "/users") {
    const users = database.select("users");

    return res.end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    // Early return: Se não tem body ou se o JSON era inválido
    if (!req.body) {
      return res.writeHead(400).end(
        JSON.stringify({
          error: "Request body is required and must be valid JSON",
        }),
      );
    }

    const { name, email } = req.body;

    // Validação extra (bônus de dev experiente)
    if (!name || !email) {
      return res.writeHead(400).end(
        JSON.stringify({
          error: "Name and email are required",
        }),
      );
    }

    const user = {
      id: randomUUID(),
      name,
      email,
    };

    database.insert("users", user);

    // Boa prática: retornar o recurso criado com status 201
    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3001, () => {
  console.log("Server runner now in port 3001");
});
