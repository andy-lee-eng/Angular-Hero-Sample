# Hero animations with Angular

The accompanying blog post is here: {blog post}

## Using the hero animation

Download [hero-transitions.js](blob/master/app/animations/hero-transition.js) and add it to your project.

Import the script:
    <script src="animations/hero-transition.js"></script>

Declare the dependency in your Angular app:
    angular.module('angularHero', [
        'ngRoute',
        'ngAnimate'
        'angularHero.hero-transition'
    ]);

Declare the page transitions to use on the `ng-view` element, including `hero-transition`:
    <div ng-view class="page-transition hero-transition"></div>

Identify hero elements with the `hero` class and `hero-id` attribute:
    <div class="name hero" hero-id="name">{{contact.name}}</div>
