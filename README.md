# Smmithflix Challenge
Welcome to the Smithflix Vue.js challenge!!!

to build and run this application, the following commands are available:

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

## The Challenge

The goal of this challenge is to make a basic movie rental application.


### Tasks

#### Environment Setup

1. Install editor tools
2. Install browser dev tools
    * [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
    * [Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

#### Project Setup

1. Using the Vue CLI or UI create a new application that includes at least:
    * Babel or TypeScript
    * Vue-Router
    * CSS Pre-processor (SCSS)
    * Unit Testing (Choose your poison)
2. From this project copy/replace the following directories:
    * `/public`
    * `/src/assets`
    * `/src/sass`
    * `/src/data`
    * `/src/utils`
3. Import the `/src/sass/styles.scss` in the `/src/main.js`
4. In `/src/views` created the following pages:
    * Cart.vue
    * Dashboard.vue
    * Home.vue
    * Movie.vue
5. In `/src/router.js` create routes for the new pages ***(note: the movie route will need to take in an ID parameter)***

#### Create Main Menu

1. In `/src/components` create a new component called "MainMenu.vue" and create links to the Home, Dashboard, and Cart pages.
2. Add the "MainMenu" component to the `/src/App.vue` file.
3. Update router `linkActiveClass` property to "active"
4. Add event to router to update `<body />` class to route name.

#### Home Page

1. In `/src/views/Home.vue` add a witty title and a link to the Dashboard page.

#### Star Rating

1. In `/src/components` create a new component called "StarRating.vue" with a property for rating and a computed property to convert the rating to a percent.

#### Movie Summary

1. In `/src/components` create a new component called "MovieSummary.vue" with a property for movie data using your new "StarRating" component.

#### Movie List

1. In `/src/components` create a new component called "MovieList.vue" with a property for a list of movie data and import the MovieSummary component.
2. Loop through the list to display a list of movie summaries.
3. Add the MovieList component to the Dashboard page.
4. In the Dashboard view, import the list of movies, set them to a data property, and bind them to the MovieList component.

#### Side Nav

1. In `/src/components` create a new component called "SideNav.vue"
2. Create a search input box
3. Create a drop-down list for the fields you would like to sort by
4. Import the list of genres and create a checklist from them and bind them to a data source.
5. Add a property called `movieFilter` and bind the search box, sort drop-down, and genre check list.
6. Add the SideNav Component to the Dashboard view.

#### Dashboard View

1. Add data properties for `filteredMovies` and a `movieFilter`.
2. Bind the movie filter to the SideNav component and the filtered movies to the MovieSummary component
3. Filter the movies once the Dashboard component is created.
4. Set a watcher to watch for changes in `movieFilter` and refilter the list

#### Movie View

1. Add link to MovieSummary component that links to the Movie view using the movie ID in the URL as a parameter.
2. When Movie view is created get movie ID parameter from the router and filter the movie list to get movie.
3. Import the StarRating component and add use it to render the user rating.
4. Create links from the Genres with a query string parameter with genre ID back to the Dashboard view.
5. In the Dashboard view, add a listener to get the genre query string parameter and add it to the filter.
