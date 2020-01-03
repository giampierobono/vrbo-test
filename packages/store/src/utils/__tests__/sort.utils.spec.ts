import { sortByConfig } from "../sort.utils";

describe("Sort utils", () => {
  const arrayToSort = [
    {
      propString: "R",
      propNum: 3
    },
    {
      propString: "E",
      propNum: 13
    },
    {
      propString: "D",
      propNum: 34
    },
    {
      propString: "A",
      propNum: 54
    },
    {
      propString: "H",
      propNum: 0
    },
    {
      propString: "F",
      propNum: 24
    }
  ];

  describe("sort by prop string", () => {
    it("should sort ascending", () => {
      expect(
        sortByConfig({ prop: "propString", asc: true } as any)(arrayToSort)
      ).toMatchSnapshot();
    });

    it("should sort descending", () => {
      expect(
        sortByConfig({ prop: "propString", asc: false } as any)(arrayToSort)
      ).toMatchSnapshot();
    });
  });

  describe("sort by prop num", () => {
    it("should sort ascending", () => {
      expect(
        sortByConfig({ prop: "propNum", asc: true } as any)(arrayToSort)
      ).toMatchSnapshot();
    });

    it("should sort descending", () => {
      expect(
        sortByConfig({ prop: "propNum", asc: false } as any)(arrayToSort)
      ).toMatchSnapshot();
    });
  });
});
