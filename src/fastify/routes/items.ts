import {
  addItemToAlgolia,
  updateItemAlgolia,
  deleteItemAlgolia,
  existsItemAlgolia,
  exportItemsAlgolia,
} from "../services/items";
import { Schemas } from "../schemas/index";

module.exports = async function (fastify, opts) {
  fastify.post(
    "/export",
    {
      schema: Schemas.exportSchema,
    },
    async function (request, reply) {
      try {
        reply.code(200);
        return await exportItemsAlgolia(request.body);
      } catch (error) {
        console.trace(error);
        reply.badRequest(error.message);
      }
    }
  );
  fastify.post(
    "/",
    {
      schema: Schemas.addItemSchema,
    },
    async function (request, reply) {
      try {
        reply.code(200);
        return await addItemToAlgolia(request.body);
      } catch (error) {
        console.trace(error);
        reply.badRequest(error.message);
      }
    }
  );

  fastify.put(
    "/",
    {
      schema: Schemas.updateItemSchema,
    },
    async function (request, reply) {
      try {
        reply.code(200);
        await existsItemAlgolia(request.body.objectID);
        return await updateItemAlgolia(request.body);
      } catch (error) {
        console.trace(error);
        reply.badRequest(error.message);
      }
    }
  );

  fastify.delete(
    "/:itemId",
    {
      schema: Schemas.deleteItemSchema,
    },
    async function (request, reply) {
      try {
        reply.code(200);
        await existsItemAlgolia(request.query.itemId);
        return await deleteItemAlgolia(request.query.itemId);
      } catch (error) {
        console.trace(error);
        reply.badRequest(error.message);
      }
    }
  );
};

module.exports.autoPrefix = "/api/items";
