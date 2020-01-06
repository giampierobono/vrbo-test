# @vrbo/common-components

This package contains components that can be shared across different applications. They are intended to be `presentational` components so they don't include any particular business logic inside. 

## PropertyCardCarousel

This component is used inside `PropertyCard` as propoerty pics carousel. A third party component from `react-bootstrap` is wrapped.

No inputs.

##  ImageHolderJs

This component is used to create fake images on the fly using `holderjs` library.

Inputs:

* `src: string`: `holderjs` image source. Ex: `holder.js/100px248?auto=yes&text=First pic&bg=282c34&theme=social` 
* `alt: string`: image alternative text 
* `cssClasses: string`: css custom classes to be applied to `img` tag

## PropertyCardComponent

This component represent card displaying information regarding a specific property. It has styles for both desktop and mobile devices. 

Inputs:

* `property: Property`: property object to display

## PropertyCardSkeletonComponent

This component represents a property card skeletons list (10 will be displayed) to be shown while loading propoerites list.

No inputs.

## PropertiesListComponent

This component displays a list of `PropertyCardComponent` or `PropertyCardSkeletonComponent` if backend call is still loading.

Inputs:

* `properties: Property[]`: list of properties 
* `isLoading: boolean`: define if components has to display properties list or property card skeletons 

## SortBySelectBox

This component is a select box having as options list all the allowed sort-by values coming from `PropertiesSortByLabels` values.