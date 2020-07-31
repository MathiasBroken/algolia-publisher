import { Algolia } from "../algolia";

export async function addItemToAlgolia(item) {
  return Algolia.index.saveObject(item);
}
