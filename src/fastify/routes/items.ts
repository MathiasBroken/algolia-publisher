import { addItemToAlgolia, updateItemAlgolia, deleteItemAlgolia, existsItemAlgolia } from "../services/items";

module.exports = async function (fastify, opts) {
  fastify.post(
    "/",
    {
      schema: {
        tags: ["Items"],
        summary: "Add new item",
        body: {
          type: "object",
          properties: {
            objectID: {
              description: "Id of the item",
              type: "string",
            },
          },
        },
      },
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
      schema: {
        tags: ["Items"],
        summary: "Update item",
        body: {
          type: "object",
          properties: {
            objectID: {
              description: "Id of the item",
              type: "string",
            },
          },
        },
      },
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
      schema: {
        tags: ["Items"],
        summary: "Remove item by itemId",
        params: {
          itemId: {
            description: "item id",
          },
        },
      },
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
