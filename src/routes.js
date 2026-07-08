import { randomUUID } from "node:crypto";

import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/users"),
    handle: (req, res) => {
      const { search } = req.query;

      const users = database.select(
        "users",
        search
          ? {
              name: search,
              email: search,
            }
          : null,
      );

      return res.end(JSON.stringify(users));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/users"),
    handle: (req, res) => {
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
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/users/:id"),
    handle: (req, res) => {
      const { id } = req.params;
      const { name, email } = req.body;

      database.update("users", id, {
        name,
        email,
      });

      return res.writeHead(204).end();
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/users/:id"),
    handle: (req, res) => {
      const { id } = req.params;

      database.delete("users", id);

      return res.writeHead(204).end();
    },
  },
];
