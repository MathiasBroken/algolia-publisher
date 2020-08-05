import { Server } from "./fastify/server";
require("dotenv").config();

Server.start().catch((error) => {
  console.error(error);
  process.exit(1);
});
