import { app } from "./app";
import { createServer } from "node:http";
import { envConfig } from "./config/env-config";

const server = createServer(app);

server.listen(envConfig().PORT, function () {
  console.log(`server on ${envConfig().PORT}`);
});
