import { getRandomNumber } from "../utils";

describe("api poller utils", () => {
  describe("getRandomNumber", () => {
    let mathRandomSpy: jest.SpyInstance;

    beforeEach(() => {
      mathRandomSpy = jest.spyOn(Math, "random").mockReturnValue(1);
    });

    afterEach(() => {
      mathRandomSpy.mockReset();
    });

    it("should return correct 'random' number", () => {
      expect(getRandomNumber(1, 3)).toBe(3);
    });
  });
});
