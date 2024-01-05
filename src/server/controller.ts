import { MockRequest } from "../types";

export class Controller {
  private access: string;

  constructor(access: string) {
    this.access = access;
  }

  processLogic(request: MockRequest) {
    // Service - Repository 구조 호출
  }
}
