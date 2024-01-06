import { DB } from "../db/db";

export class DAO {
  private db: DB;

  constructor() {
    this.db = new DB();
  }

  processLogic(params: object) {
    const query: string = this.buildQuery(params);
    console.log(query);
    return;
  }

  buildQuery(params: object): string {
    const query: string = `SELECT * FROM ${params["section"]} WHERE year = ${params["year"]}`;
    return query;
  }
}
