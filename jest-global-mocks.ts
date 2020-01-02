import { GlobalState } from "./packages/store/src";

export const mockState: GlobalState = {
  propertiesList: {
    properties: [
      {
        title:
          "Luxury Home Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        rating: 2.5,
        ratingCount: 3,
        price: 110,
        beds: 5,
        bath: 4,
        sqFeet: 4138
      },
      {
        title:
          "Luxury Home tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        rating: 3,
        ratingCount: 32,
        price: 155,
        beds: 1,
        bath: 3,
        sqFeet: 2079
      },
      {
        title:
          "Luxury Home quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        rating: 3.5,
        ratingCount: 45,
        price: 313,
        beds: 1,
        bath: 3,
        sqFeet: 2402
      },
      {
        title:
          "Luxury Home consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
        rating: 1,
        ratingCount: 7,
        price: 107,
        beds: 4,
        bath: 2,
        sqFeet: 4457
      },
      {
        title:
          "Luxury Home cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non",
        rating: 1.5,
        ratingCount: 25,
        price: 290,
        beds: 1,
        bath: 3,
        sqFeet: 3825
      },
      {
        title:
          "Luxury Home exercitation ullamco laboris nisi ut aliquip ullamco laboris",
        rating: 4,
        ratingCount: 1,
        price: 273,
        beds: 5,
        bath: 4,
        sqFeet: 3437
      },
      {
        title: "Luxury Home deserunt mollit anim id est laborum",
        rating: 2.5,
        ratingCount: 8,
        price: 130,
        beds: 2,
        bath: 1,
        sqFeet: 3400
      },
      {
        title:
          "Luxury Home mollit anim id est laborum laboris nisi ut aliquip ex ea commodo",
        rating: 2,
        ratingCount: 12,
        price: 126,
        beds: 3,
        bath: 3,
        sqFeet: 2058
      },
      {
        title:
          "Luxury Home qui officia deserunt mollit anim id est laborum amet, consectetur adipisicing elit, sed do eiusmod",
        rating: 2,
        ratingCount: 20,
        price: 104,
        beds: 2,
        bath: 4,
        sqFeet: 2453
      },
      {
        title:
          "Luxury Home ipsum dolor sit amet, consectetur deserunt mollit anim id est laborum",
        rating: 2,
        ratingCount: 9,
        price: 254,
        beds: 4,
        bath: 3,
        sqFeet: 3133
      },
      {
        title:
          "Fancy Condo Bacon ipsum dolor amet pastrami chicken venison, meatball alcatra pork belly short ribs",
        rating: 4.5,
        ratingCount: 28,
        price: 374,
        beds: 2,
        bath: 1,
        sqFeet: 2796
      },
      {
        title:
          "Fancy Condo Short loin alcatra tail beef burgdoggen hamburger spare ribs meatball kevin sirloin leberkas pork loin prosciutto shankle bresaola",
        rating: 3.5,
        ratingCount: 4,
        price: 111,
        beds: 4,
        bath: 3,
        sqFeet: 1889
      },
      {
        title:
          "Fancy Condo Sirloin jerky landjaeger leberkas jowl tongue salami capicola sausage cow hamburger picanha ball tip meatball corned beef",
        rating: 3.5,
        ratingCount: 30,
        price: 234,
        beds: 4,
        bath: 1,
        sqFeet: 4337
      },
      {
        title:
          "Fancy Condo Leberkas fatback meatloaf kielbasa bresaola biltong jowl turkey sausage rump",
        rating: 2,
        ratingCount: 25,
        price: 136,
        beds: 5,
        bath: 3,
        sqFeet: 2269
      },
      {
        title: "Fancy Condo Pork chop chuck shank jowl landjaeger",
        rating: 1.5,
        ratingCount: 18,
        price: 294,
        beds: 5,
        bath: 5,
        sqFeet: 3472
      },
      {
        title:
          "Fancy Condo Ground loin alcatra tail beef burgdoggen hamburger cupim turducken ham hock venison kielbasa",
        rating: 4.5,
        ratingCount: 47,
        price: 182,
        beds: 5,
        bath: 1,
        sqFeet: 4114
      },
      {
        title:
          "Fancy Condo cupim turducken ham hock venison kielbasa tail beef burgdoggen hamburger",
        rating: 2,
        ratingCount: 1,
        price: 261,
        beds: 5,
        bath: 5,
        sqFeet: 2731
      },
      {
        title: "Fancy Condo venison kielbasa beef burgdoggen hamburger spare",
        rating: 1,
        ratingCount: 33,
        price: 366,
        beds: 4,
        bath: 5,
        sqFeet: 2899
      },
      {
        title:
          "Fancy Condo jerky landjaeger leberkas, cupim turducken ham hock venison kielbasa",
        rating: 4.5,
        ratingCount: 1,
        price: 373,
        beds: 5,
        bath: 3,
        sqFeet: 3680
      },
      {
        title:
          "Fancy Condo sirloin capicola, Short loin alcatra tail beef venison kielbasa",
        rating: 3.5,
        ratingCount: 9,
        price: 336,
        beds: 1,
        bath: 2,
        sqFeet: 1911
      }
    ]
  },
  pollerConfig: {
    config: {
      limit: 10,
      type: "houses" as any
    }
  },
  apiCallStatus: {
    propertiesPollLoading: false
  },
  propertiesListSortBy: {
    sortConfig: "Title" as any
  }
};
