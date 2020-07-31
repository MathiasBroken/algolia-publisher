import { addItemToAlgolia } from "../services/items";
import { Schemas } from "../schemas/index";

module.exports = async function (fastify, opts) {
  fastify.post("/", { schema: Schemas.addItemSchema }, async function (request, reply) {
    try {
      reply.code(200);
      return await addItemToAlgolia(request.body);
    } catch (error) {
      console.trace(error);
      reply.badRequest(error.message);
    }
  });
};

module.exports.autoPrefix = "/api/items";
