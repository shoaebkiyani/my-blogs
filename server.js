const jsonServer = require("json-server");
const server = jsonServer.create();
const cors = require("cors");
const router = jsonServer.router("./data/db.json");
const middleware = jsonServer.defaults({
  static: "./build",
});

const port = process.env.PORT || 8000;
server.use(middleware);
server.use(
  jsonServer.rewriter({
    "/blogs/*": "/$1",
  })
);

server.use(router);
server.use(cors());
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
