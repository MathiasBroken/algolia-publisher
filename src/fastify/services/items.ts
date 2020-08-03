import { Algolia } from "../algolia";

export async function addItemToAlgolia(item) {
  return Algolia.index.saveObject(item);
}

export async function updateItemAlgolia(item) {
  return Algolia.index.partialUpdateObject(item);
}

export async function deleteItemAlgolia(itemId) {
  return Algolia.index.deleteObject(itemId);
}

export async function existsItemAlgolia(itemId) {
  return Algolia.index.getObject(itemId);
}

export async function exportItemsAlgolia(items) {
  return Algolia.index.saveObjects(items);
}
