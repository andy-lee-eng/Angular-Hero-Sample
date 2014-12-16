# Hero animations with Angular

The accompanying blog post is here: {blog post}

## Using the hero animation in your project

Download [hero-transitions.js](app/animations/hero-transition.js) and add it to your project.

Import the script:
```
<script src="animations/hero-transition.js"></script>
```
Add the css class:
```
.hero-animating {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: all ease-in-out 500ms;
    transition: all ease-in-out 500ms;
    position: absolute;
    z-index: 10000;
}
```
Declare the dependency in your Angular app:
```
angular.module('angularHero', [
        'ngRoute',
        'ngAnimate'
        'angularHero.hero-transition'
    ]);
```
Declare the page transitions to use on the `ng-view` element, including `hero-transition`:
```
<div ng-view class="page-transition hero-transition"></div>
```
Identify hero elements with the `hero` class and `hero-id` attribute:
```
<div class="name hero" hero-id="name">{{contact.name}}</div>
```

###Building and running the project

The project contains a simple node web server, so all you need to do is run:
```
npm start
```
