export const Schemas = {
  addItemSchema: {
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
    response: {
      200: {
        type: "string",
      },
    },
  },
};
