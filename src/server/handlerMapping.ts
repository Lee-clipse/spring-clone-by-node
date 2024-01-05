import { Controller } from "./controller";

export class HandlerMapping {
  constructor() {}

  routeController(url: string): Controller {
    // url에서 route를 위해 access를 분리
    const access: string = "/" + url.split("/").slice(2).join("/");
    const targetController: Controller = this.searchTargetController(access);
    return targetController;
  }

  // routing 로직이 있다 가정
  searchTargetController(access: string): Controller {
    return new Controller(access);
  }
}
