import Fastify, { FastifyInstance } from "fastify";
import { join } from "path";
import AutoLoad from "fastify-autoload";

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
      await this.fastify.listen(3000);
      console.log(`Server listening at port ${3000}`);
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
