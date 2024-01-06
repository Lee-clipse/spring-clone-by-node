import { DB } from "../db/db";

export class DAO {
  private db: DB;

  constructor() {
    this.db = new DB();
  }

  // 쿼리 가공 후 DB에 전송
  processLogic(params: object): string[] {
    const query: string = this.buildQuery(params);
    const response: string[] = this.db.runQuery(query);
    return response;
  }

  buildQuery(params: object): string {
    const query: string = `SELECT * FROM ${params["section"]} WHERE year = ${params["year"]}`;
    return query;
  }
}
