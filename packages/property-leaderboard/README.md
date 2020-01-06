# @vrbo/property-leaderboard

Web-app used to display the retrieved properties list and sort by different criteria. 

What it does is setup of the state using what's exported by `@vrbo/store` and create wrapper components (aka container components) for the one exported by `@vrbo/common-components` module.

Container components are made as react functional components, using new functional hooks instead of class extending `React.Component`. 

They are in charge of retrieving data from the store and pass the as inputs to presentational components. 

Doing this, the web-app stays pretty simple and, in case of changes in some dependencies, most of time only an increase of version would be necessary instead of code changes (unless there are breaking changes, of course).