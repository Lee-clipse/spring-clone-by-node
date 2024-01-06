import { DAO } from "./dao";

export class Service {
  private dao: DAO;

  constructor() {
    this.dao = new DAO();
  }

  processLogic(dto: string[]) {
    // 간단한 연도 stoi 로직
    const dbParams: object = {
      section: dto[0],
      year: this.parseToNumber(dto[1]),
    };
    // Repository 구조 호출
    const dbResponse: string[] = this.dao.processLogic(dbParams);
    // DB 데이터 가공
    const response: object = this.convertToObject(dbResponse);
    return response;
  }

  // 비즈니스 로직 처리
  parseToNumber(str: string): number {
    const num: number = +str;
    return num;
  }

  // DB 데이터 가공
  convertToObject(dbResponse: string[]): object {
    const response = dbResponse.map((row) => {
      const parts = row.split("/");
      return { field: parts[1], name: parts[2].split("\r")[0] };
    });
    return response;
  }
}
