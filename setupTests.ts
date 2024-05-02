import "@testing-library/jest-dom/vitest";
import "jest-axe/extend-expect";
import MatchMediaMock from "vitest-matchmedia-mock";
import { server } from "./mocks/server";
const matchmediaMock = new MatchMediaMock();

// Enable API mocking before tests.
beforeAll(() => {
  matchmediaMock.useMediaQuery("(prefers-color-scheme: dark)");
  server.listen();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => {
  matchmediaMock.clear();
  server.close();
});
