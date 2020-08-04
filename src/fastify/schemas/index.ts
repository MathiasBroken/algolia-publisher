export const Schemas = {
  exportSchema: {
    tags: ["Items"],
    summary:
      "Export a set of items to algolia, creates the item and if it already exits in algolia is updated with the new data",
    body: {
      type: "array",
      items: {
        properties: {
          objectID: {
            description: "Id of the item",
            type: "string",
          },
        },
      },
    },
  },
  addItemSchema: {
    tags: ["Items"],
    summary: "Create a new item in algolia",
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
  updateItemSchema: {
    tags: ["Items"],
    summary: "Updates the item from algolia if it does exits",
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
  deleteItemSchema: {
    tags: ["Items"],
    summary: "Remove the item totally from algolia if it does exits",
    params: {
      itemId: {
        description: "item id",
      },
    },
  },
};
