import { mockState } from "../../../../../jest-global-mocks";
import {
  sortByBath,
  sortByBeds,
  sortByPrice,
  sortByRating,
  sortByRatingCount,
  sortBySqFeets,
  sortByTitle
} from "../sort.utils";

describe("Sort utils", () => {
  describe("sortByTitle", () => {
    it("should return list sorted asc by title", () => {
      expect(
        sortByTitle(mockState.propertiesList.properties)
      ).toMatchSnapshot();
    });
  });

  describe("sortByRating", () => {
    it("should return list sorted asc by rating", () => {
      expect(
        sortByRating(mockState.propertiesList.properties)
      ).toMatchSnapshot();
    });
  });

  describe("sortByRatingCount", () => {
    it("should return list sorted asc by rating count", () => {
      expect(
        sortByRatingCount(mockState.propertiesList.properties)
      ).toMatchSnapshot();
    });
  });

  describe("sortByPrice", () => {
    it("should return list sorted asc by price", () => {
      expect(
        sortByPrice(mockState.propertiesList.properties)
      ).toMatchSnapshot();
    });
  });

  describe("sortByBeds", () => {
    it("should return list sorted asc by beds count", () => {
      expect(sortByBeds(mockState.propertiesList.properties)).toMatchSnapshot();
    });
  });

  describe("sortByBath", () => {
    it("should return list sorted asc by baths count", () => {
      expect(sortByBath(mockState.propertiesList.properties)).toMatchSnapshot();
    });
  });

  describe("sortBySqFeets", () => {
    it("should return list sorted asc by sqFeets count", () => {
      expect(
        sortBySqFeets(mockState.propertiesList.properties)
      ).toMatchSnapshot();
    });
  });
});
