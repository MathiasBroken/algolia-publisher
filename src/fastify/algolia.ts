import algoliasearch from "algoliasearch";
export class Algolia {
  static index;

  static connect() {
    try {
      const client = algoliasearch(process.env.APP_KEY, process.env.API_KEY);
      Algolia.index = client.initIndex(process.env.INDEX);
    } catch (error) {
      console.trace(error);
      throw new Error("Algolia init conection error");
    }
  }
}
