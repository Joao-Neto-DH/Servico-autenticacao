import { app } from "./app";
import { createServer } from "node:http";

const server = createServer(app);

server.listen(3333, function () {
  console.log("server on 3333");
});
