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
    const responseDto = this.dao.processLogic(dbParams);
    // Repository 구조 호출
    return;
  }

  parseToNumber(str: string): number {
    const num: number = +str;
    return num;
  }
}
