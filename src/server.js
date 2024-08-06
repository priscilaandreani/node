import http from "http";
import { json } from "./middlewares/json.js";
import { routes } from "./routes.js";
import { extractQuertyParams } from "./utils/extract-query-params.js";

// req => infos about the request
// res => response to the request
const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.path.test(url);
  });

  if (route) {
    const routeParams = req.url.match(route.path);

    const { query, ...params } = routeParams.groups;

    req.params = params;
    req.query = query ? extractQuertyParams(query) : {};

    return route.handler(req, res);
  }

  return res.writeHead(404).end();
});

server.listen(3333);
