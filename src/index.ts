import { Client } from "./client/client";
import { SpringServer } from "./server/springServer";

(() => {
  const client: Client = new Client();
  const server: SpringServer = new SpringServer();

  const request = client.makeRequest();
  server.handleRequest(request);
})();
