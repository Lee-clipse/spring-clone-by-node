import { Client } from "./client/client";
import { SpringServer } from "./server/springServer";

import { MockRequest, MockResponse } from "./types";

(() => {
  const client: Client = new Client();
  const server: SpringServer = new SpringServer();

  const request: MockRequest = client.getRequest();
  const response: MockResponse = server.handleRequest(request);
  console.log("Response: ", response);
})();
