import { Property, PropertyType } from "@vrbo/data-models";
import { poll } from "../poller";

describe("api poller", () => {
  let mathRandomSpy: jest.SpyInstance;

  beforeEach(() => {
    mathRandomSpy = jest.spyOn(Math, "random").mockReturnValue(1);
  });

  afterEach(() => {
    mathRandomSpy.mockReset();
  });

  it("should return list of 10 houses", async done => {
    const result = poll({ limit: 10, type: PropertyType.Houses });
    await result.then((houses: Property[]) => {
      expect(houses.length).toBe(10);
      expect(houses).toMatchSnapshot();
      done();
    });
  });

  it("should return list of 5 houses", async done => {
    const result = poll({ limit: 5, type: PropertyType.Houses });
    await result.then((houses: Property[]) => {
      expect(houses.length).toBe(5);
      expect(houses).toMatchSnapshot();
      done();
    });
  });

  it("should return list of 10 condos", async done => {
    const result = poll({ limit: 10, type: PropertyType.Condos });
    await result.then((condos: Property[]) => {
      expect(condos.length).toBe(10);
      expect(condos).toMatchSnapshot();
      done();
    });
  });

  it("should return list of 5 condos", async done => {
    const result = poll({ limit: 5, type: PropertyType.Condos });
    await result.then((condos: Property[]) => {
      expect(condos.length).toBe(5);
      expect(condos).toMatchSnapshot();
      done();
    });
  });
});
