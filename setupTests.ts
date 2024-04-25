import "@testing-library/jest-dom/vitest";
import "jest-axe/extend-expect";
import { server } from "./mocks/server";

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
