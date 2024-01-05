import { MockRequest } from "../types";

export class Client {
  private request: MockRequest;

  constructor() {
    this.request = {
      method: "GET",
      url: "/some-site/post/2024",
      header: {
        Host: "www.website.com",
      },
      cookie: {
        logged_in: "no",
      },
    };
  }

  getRequest(): MockRequest {
    return this.request;
  }
}
