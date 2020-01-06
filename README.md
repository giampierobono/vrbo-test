# Vrbo frontend test - Giampiero Bono

## @vrbo/root

![CI badge](https://github.com/giampierobono/vrbo-test/workflows/vrtbo-test:ci/badge.svg)[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

The project is organized as a monorepo and includes 5 different projects:

* **@vrbo/data-models**
* **@vrbo/api-poller**
* **@vrbo/store**
* **@vrbo/common-components**
* **@vrbo/styling**
* **@vrbo/property-leaderboard** (the webapp)

Monorepo's root is: `packages/*`.

Monorepo has been set to have an independent version for each of them to allow independent code evolution
and less risky changes. 

Projects are all written using Typescript and "built" using `webpack` and `gulp` (only `@vrbo/styling`).

File names can be more Angular style (kebab case) than React (camel case).

More details about can be found in each project specific README file.

## Yeah cool but...how can I run it?

Let's start with some things you need to have installed before start the fun part:

* **node / npm**: would be better to have latest version of `node` and `npm`, but minimum required is `node` v10.
Can I use `yarn` to install dependencies? No. To prevent using `yarn` there is a `preinstall` script that will check
if node is used or this error will be logged in console:

`
   You must use npm to install dependencies:
  $ npm install
   or
  $ npm i
`

* **terminal**: needed to run commands.
* **browser**: well..it's a webapp so...

That's pretty much everything needed to run this project on your machine, now open a terminal and run: 

`npm i` 

This command will install dependencies and after the `postinstall` script will take care of building all the local dependencies and link them in `node_modules` folders of projects requiring them as dependencies. 

`package.json` file in project's root is used to run commands for every module in the monorepo. In this way many dependecies (like `rimraf`) have been declated as `peerDependencies` and not repeated. 

*One package.json to lead them all*

Once everything's finished, there are 2 options:

* run `start:property-leaderboard`: this will run a dev build with `react-sript`, build won't be optmized and sourcemaps created (IE11 may not work).
* run `serve:property-leaderboard`: this will run a prod build and run a local http server pointing to build output folder (IE11 works).

## Why a monorepo? 

The decision of presenting this project as a monorepo structure comes from the multiple benefits it has.

### Tools

Lerna is a very complete tool to manage monorepo projects. It takes care of semantic versioning, changelog creation,
internal dependencies link creation etc.

### Code / configs sharing

Keeping  code in separated projects allows sharing it easily across different applications. Also configurations like `webpack`, `tslint`, `tsconfig` , `stylelint`, ` gulp` can be easily exteded avoid replicating them for each project.

### Easier migrations

Imagine having two applications inside the monorepo: one for desktop and another one for mobile, and suppose those apps share the same common code from other packages (react components, store, etc.) and all depend on `react`. 

If a new version of `react` comes out with breaking changes, it'd possible to smoothly migrate all step by step without doing everything in one shot. 

Ok, this could be also achieved having projects split in muti repos but it won't be that easy to modify and build code from different projects having it in different folders. 

## Git hooks

Some git hooks are set by using `husky` package. In particular this projects has 2 hooks: 

* **pre-commit-msg**: staged file are formatted and linted 
* **pre-push**: run tests

## Code / commits style

`Prettier` and `tslint` are setup to ensure code following same formatting rules and avoid common bad practices (thanks to `tslint`). Those two are also run automatically on git staged files at `pre-commit` hook.

Also `sass` files are checked by `stylelint `.

Reccomended configurations (format / linter rules) are used, but they can be easily customized to fit companies requirements.

This repo is commitizen friendly and commit messages are created following commitizen recommendations. 

## Tests

Tests are run using `Jest`. Global mocks are inside `__mocks__` folder in root to let other projects easily extend and customize them according to their needs. 

Not all projects contain tests. Only `@vrbo/store` and `@vrbo/api-poller` containing all core business logic. Components are mostly used to display data from the store.

## Possible mprovements

* Webpack config could be improved to reduce bundle sizes.
* File names can be adapted to be camel case and respect style guidelines. 
* Probably some of package.json dependencies can be set as webpack externals to ensure their are not added twice to the bundle (currently should not be the case, but there are always ways to improve).
* Components styles
* Components tests  to be added
