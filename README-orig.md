# Vrbo Coding Exercise for Frontend Developers 
 
## Introduction 
 
Thanks for your interest in a position at Vrbo (formerly known as HomeAway), part of Expedia Group! 
 
This exercise will help the hiring team at Vrbo gauge your level of frontend coding experience (HTML, CSS & ES6 JavaScript). The task you are solving here is based on real challenges faced at Vrbo. 
 
We'd like to be respectful of your time while still allowing you to produce enough code for us to make a fair assessment of your skills, so please take a reasonable time to complete it. Just make sure you finally include a note describing how long did it take you to complete the exercise, i.e. what hours you invested coding this exercise. 
 
Try to ensure that the finished product represents your coding abilities. You are not necessarily expected to fully finish within the suggested time limit. We'd much rather review high-quality, incomplete work than rushed, completed work. 
 
## Instructions 
 
To get started, we've created a few starter files that you should flesh out: 

* [index.html](dist/index.html)
* [main.less](styles/main.less)
* [index.js](js/index.js)
* [spinner.gif](dist/images/spinner.gif) (should you wish to use as a loading placeholder :)

and a [PNG](ui-card-challenge.png) to use as a mockup.
 
In the following sections you'll find more details about requirements and questions. 
 
When you're finished, please send your work to your Vrbo contact. It can be delivered preferably as a private repo, or alternatively as a compressed file. The only requirement is to make sure it is not publicly available, please notice this coding exercise is confidential content. 

## Requirements & Objective

NOTE: this project assumes you have node v `6.11.1` and npm v `3.10.10`.

You will build a Property leaderboard, which is a combined list of the top five home/condo properties sorted descending by guest rating value.

For simplicity's sake, we've stubbed out an API interface within a library (see [api.js](js/api.js)). The library provides a `Poller()` class with a `.poll()` method. This method will poll for the top names of the type of property requested in each poll ('homes' or 'condos'). The poll method returns a Promise that will resolve at a randomly generated interval to simulate network request latency. Use the output of the poll method to hydrate your UI Component e.g. cost value, rating value, bedroom value, etc.

See `js/index.js` for an example of how to instantiate and call the Poller module. Below is an example of what is outputted when polling for `type: 'houses'`:

```javascript
[
  {
    "title": "Luxury Home Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    "rating": 0.5,
    "ratingCount": 4,
    "price": 376,
    "beds": 5,
    "bath": 1,
    "sqFeet": 4180
  },
  {
    "title": "Luxury Home tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "rating": 2.5,
    "ratingCount": 7,
    "price": 365,
    "beds": 4,
    "bath": 1,
    "sqFeet": 4360
  },
  ...
  ]
```

Your task is to use the poll method to implement a solution that handles multiple asynchronous responses to build the Property leaderboard. The leaderboard that you build must satisfy these basic requirements:

* Visually adhere to the provided [PNG](ui-card-challenge.png) and build a simple Card Component template using the given specifications. Create the UI Component template any way you see fit - a couple of possibilities are React (preferably) or handlebars.
* The UI component you build should be mobile-first responsive. Do not fret about tablet breakpoint styles for now.
* Every 15 seconds, update the leaderboard to show the latest properties, sorted descending by guest rating value.
* The resulting leaderboard should be a mix of both houses and condos.
* The code must be cross-browser tested and run without error in the major supported browsers including: Chrome, Firefox, Safari, Microsoft Edge and IE11.
* **Bonus:** Animate the leaderboard update in some way (fade/dissolve, sliding, etc.).
* **Bonus:** Add the ability to sort the properties by another metric e.g. Price, bedroom count, etc.
* **Bonus:** Use React for your templating solution

## Local Development Instructions

We have set up a very basic local build development system to aid you as you develop the project. Please follow these steps to get started!
1. After cloning this repo, make sure to install you node modules with `npm install`.
2. You may then use the command `npm start` to fire up the dev build/watch process, which will compile your LESS files, transpile your Javascript, and watch for any file changes.
3. Your default browser should open to `http://localhost:8000/index.html`. If not, simply copy and paste that URL into your browser address bar. You can then refresh the webpage upon subsequent code changes to see them.

## Questions?

Please use your best judgment to interpret the requirements above and feel free to make any decisions you need to build a solution that meets these requirements and also shows your skills. We recommend you to include, within your work delivered, any notes or decisions taken in a a unique and visible place. 
 
Be prepared to explain your thinking and how your development process lead to your solution.

Best of luck!
