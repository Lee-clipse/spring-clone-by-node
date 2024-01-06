import { MockRequest, MockResponse } from "../types";
import { HandlerMapping } from "./handlerMapping";
import { Controller } from "./controller";

export class DispatcherServlet {
  private handlerMapping: HandlerMapping;

  constructor() {
    this.handlerMapping = new HandlerMapping();
  }

  handleHttpRequest(request: MockRequest): MockResponse {
    const url: string = request.url;
    // 사용자 요청에 적절한 Controller 탐색
    const targetController: Controller = this.handlerMapping.routeController(url);
    // Controller - Service - Repository 구조 호출
    targetController.processLogic(request); // TODO: Controller 단에서 View name, Model 반환
    return;
  }
}
