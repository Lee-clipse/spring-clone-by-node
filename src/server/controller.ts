import { MockRequest } from "../types";
import { Service } from "./service";

export class Controller {
  private access: string;
  private service: Service;

  constructor(access: string) {
    this.access = access;
    this.service = new Service();
  }

  processLogic(request: MockRequest) {
    // Service - Repository 구조 호출
    const dto: string[] = this.parseParams(request.url);
    const responseDto = this.service.processLogic(dto);
    // TODO: DTO 가공해서 View name, Model 반환
    return;
  }

  parseParams(url: string): string[] {
    const params: string[] = url.split("/").slice(2);
    return params;
  }
}
