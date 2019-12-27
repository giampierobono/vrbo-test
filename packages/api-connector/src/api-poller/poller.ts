import { PollerConfig, Property, PropertyType } from "@vrbo/data-models";
import { getRandomNumber } from "../utils";

const pollerDefaultConfig: PollerConfig = {
  limit: 10,
  type: PropertyType.Houses
};

const fakeDB: { houses: string[]; condos: string[] } = {
  houses: [
    "Luxury Home Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    "Luxury Home tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "Luxury Home quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    "Luxury Home consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
    "Luxury Home cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non",
    "Luxury Home exercitation ullamco laboris nisi ut aliquip ullamco laboris",
    "Luxury Home deserunt mollit anim id est laborum",
    "Luxury Home mollit anim id est laborum laboris nisi ut aliquip ex ea commodo",
    "Luxury Home qui officia deserunt mollit anim id est laborum amet, consectetur adipisicing elit, sed do eiusmod",
    "Luxury Home ipsum dolor sit amet, consectetur deserunt mollit anim id est laborum"
  ],
  condos: [
    "Fancy Condo Bacon ipsum dolor amet pastrami chicken venison, meatball alcatra pork belly short ribs",
    "Fancy Condo Short loin alcatra tail beef burgdoggen hamburger spare ribs meatball kevin sirloin leberkas pork loin prosciutto shankle bresaola",
    "Fancy Condo Sirloin jerky landjaeger leberkas jowl tongue salami capicola sausage cow hamburger picanha ball tip meatball corned beef",
    "Fancy Condo Leberkas fatback meatloaf kielbasa bresaola biltong jowl turkey sausage rump",
    "Fancy Condo Pork chop chuck shank jowl landjaeger",
    "Fancy Condo Ground loin alcatra tail beef burgdoggen hamburger cupim turducken ham hock venison kielbasa",
    "Fancy Condo cupim turducken ham hock venison kielbasa tail beef burgdoggen hamburger",
    "Fancy Condo venison kielbasa beef burgdoggen hamburger spare",
    "Fancy Condo jerky landjaeger leberkas, cupim turducken ham hock venison kielbasa",
    "Fancy Condo sirloin capicola, Short loin alcatra tail beef venison kielbasa"
  ]
};

const getData = (type: PropertyType): Property[] => {
  let item;
  let i;
  let len;
  const list = fakeDB[type] || [];
  const results = [];

  for (i = 0, len = list.length; i < len; i++) {
    item = list[i];

    results.push({
      title: item,
      rating: getRandomNumber(0, 5),
      ratingCount: Math.floor(Math.random() * 50) + 1,
      price: Math.floor(Math.random() * 300) + 100,
      beds: Math.floor(Math.random() * 5) + 1,
      bath: Math.floor(Math.random() * 5) + 1,
      sqFeet: Math.floor(Math.random() * 3000) + 1500
    });
  }
  return results;
};

const processData = (data: Property[], limit: number): Property[] =>
  data.slice(0, limit);

export const poll = (
  options: PollerConfig,
  callBack?: (properties: Property[]) => void
) => {
  const config: PollerConfig = { ...pollerDefaultConfig, ...options };
  return new Promise(resolve => {
    setTimeout(() => {
      const payload = processData(getData(config.type), config.limit);

      if (callBack) {
        callBack(payload);
      }
      resolve(payload);
    }, getRandomNumber(400, 2000));
  });
};
