import Fastify, { FastifyInstance } from "fastify";
import { join } from "path";
import AutoLoad from "fastify-autoload";
import { Algolia } from "./algolia";

export class Server {
  static fastify: FastifyInstance;

  static async start() {
    try {
      this.fastify = Fastify({
        logger: { level: "info" },
        ignoreTrailingSlash: true,
      });
      await this.fastify.register(AutoLoad, {
        dir: join(__dirname, "/plugins"),
      });
      await this.fastify.register(AutoLoad, {
        dir: join(__dirname, "/routes"),
      });
      await Algolia.connect();
      await this.fastify.listen(Number(process.env.PORT) | 3000, "0.0.0.0");
      console.log(`Server listening at port ${process.env.PORT}`);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async getInstance(): Promise<FastifyInstance> {
    if (!Server.fastify) {
      await Server.start();
    }
    return Server.fastify;
  }

  static async stop() {
    await Server.fastify.close();
  }
}
