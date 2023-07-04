// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// src/setupTests.js
import { server } from "./mocks/server.js";
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
// 각 테스트 후 핸들러 재설정
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
// 모든 테스트 종료 후 서버 닫음
afterAll(() => server.close());
