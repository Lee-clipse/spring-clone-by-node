export type MockRequest = {
  method: string;
  url: string;
  header: object;
  cookie: object;
};

export type MockResponse = {
  status: string;
  header: object;
  body: object;
};
