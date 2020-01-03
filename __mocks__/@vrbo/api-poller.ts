import { mockState } from "../../jest-global-mocks";

const apiPoller = jest.requireActual("@vrbo/api-poller");

apiPoller.poll = jest.fn(() =>
  Promise.resolve(mockState.propertiesList.properties)
);

module.exports = apiPoller;
