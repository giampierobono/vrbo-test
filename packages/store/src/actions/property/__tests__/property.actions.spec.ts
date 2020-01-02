import {
  failPollingPropertiesListAction,
  loadPropertiesAction,
  updatePropertiesListAction
} from "../property.actions";

describe("Property actions", () => {
  it("should return correct loadPropertiesAction object", () => {
    expect(loadPropertiesAction()).toMatchSnapshot();
  });

  it("should return correct updatePropertiesListAction object", () => {
    expect(
      updatePropertiesListAction([
        {
          rating: 10,
          ratingCount: 30,
          bath: 3,
          beds: 2,
          price: 100,
          title: "test prop",
          sqFeet: 200
        }
      ])
    ).toMatchSnapshot();
  });

  it("should return correct failPollingPropertiesListAction object", () => {
    expect(
      failPollingPropertiesListAction({ error: "fake error" })
    ).toMatchSnapshot();
  });
});
