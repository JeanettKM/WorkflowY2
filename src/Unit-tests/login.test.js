import { login } from "../js/api/auth/login.js";

const userEmail = "jeanett.kestner@stud.noroff.no";
const userPassword = "Kestner12";
const mockAccessToken = "localTokenMock";

const mockSuccessfulFetch = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({
    name: "test",
    email: userEmail,
    accessToken: mockAccessToken,
  }),
});

const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = mockLocalStorage;

const mockFailedFetch = jest.fn().mockResolvedValue({
  ok: false,
  statusText: "Unauthorized",
  statusCode: 401,
});

describe("login function", () => {
  beforeEach(() => {
    mockLocalStorage.clear();
  });

  it("calls API and stores values in local storage", async () => {
    global.fetch = mockSuccessfulFetch;
    await login(userEmail, userPassword);
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      "token",
      '"localTokenMock"'
    );
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      "profile",
      '{"name":"test","email":"jeanett.kestner@stud.noroff.no"}'
    );
  });

  it("API call fails and does not store values in local storage", async () => {
    global.fetch = mockFailedFetch;
    await expect(login(userEmail, userPassword)).rejects.toThrow(
      "Unauthorized"
    );
  });
});
