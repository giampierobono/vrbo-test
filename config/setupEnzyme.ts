import * as Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "../jest-global-mocks";

Enzyme.configure({
  adapter: new Adapter()
});
