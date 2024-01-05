import { MockRequest, MockResponse } from "../types";

export class SpringServer {
  constructor() {}

  handleRequest(request: MockRequest): MockResponse {
    console.log("Request: ", request);
    return;
  }
}
