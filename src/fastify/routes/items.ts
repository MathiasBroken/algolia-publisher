import { addItemToAlgolia } from "../services/items";

module.exports = async function (fastify, opts) {
  fastify.post("/", async function (request, reply) {
    try {
      reply.code(200);
      return await addItemToAlgolia(request.body);
    } catch (error) {
      console.trace(error);
      reply.badRequest(error);
    }
  });
};

module.exports.autoPrefix = "/api/items";
