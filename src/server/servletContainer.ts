import { MockRequest, MockResponse } from "../types";
import { DispatcherServlet } from "./dispatcherServlet";

export class ServletContainer {
  private dispatcherServlet: DispatcherServlet;

  constructor() {
    this.dispatcherServlet = new DispatcherServlet();
  }

  handleRequest(request: MockRequest): MockResponse {
    const response: MockResponse = this.dispatcherServlet.handleHttpRequest(request);
    return response;
  }
}
