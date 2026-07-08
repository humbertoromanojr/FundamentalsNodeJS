import http from "node:http";

import { json } from "./middlewares/json.js";
import { routes } from "./routes.js";

/* Three ways to send information to the API
    - http://localhost:3001/users?userId=1&name=Humberto 
 01 - Query parameters: URL Stateful => filter, pagination, not required

    - http://localhost:3001/users/1
 02 - Router parameters: resource identification 
 03 - Request Body: Submitting information from a form

*/

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.path.test(url);
  });

  if (route) {
    const routeParams = req.url.match(route.path);

    req.params = { ...routeParams.groups };

    return route.handle(req, res);
  }

  return res.writeHead(404).end();
});

server.listen(3001, () => {
  console.log("Server runner now in port 3001");
});
