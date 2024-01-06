import fs from "fs";
import path from "path";

export class DB {
  constructor() {}

  runQuery(query: string): string[] {
    const response: string[] = this.getGotyData(query);
    return response;
  }

  getGotyData(query: string): string[] {
    // query로 작업한다고 가정
    const filePath = path.join(__dirname, "storage.txt");

    try {
      const data = fs.readFileSync(filePath, { encoding: "utf-8" });
      const rows = data.split("\n");
      return rows;
    } catch (err) {
      console.error(err);
    }
  }
}
