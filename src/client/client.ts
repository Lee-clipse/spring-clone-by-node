import { MockRequest } from "../types";

export class Client {
  private request: MockRequest;

  constructor() {
    this.request = {
      method: "GET",
      url: "/steamawards/goty/2023",
      header: {
        Host: "https://store.steampowered.com",
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
