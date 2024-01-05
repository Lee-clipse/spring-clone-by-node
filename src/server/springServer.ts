import { MockRequest, MockResponse } from "../types";
import { ServletContainer } from "./servletContainer";

export class SpringServer {
  private servletContainer: ServletContainer;
  constructor() {
    this.servletContainer = new ServletContainer();
  }

  handleRequest(request: MockRequest): MockResponse {
    console.log("Request: ", request);
    const response: MockResponse = this.servletContainer.handleRequest(request);
    return response;
  }
}
