'use strict';

// Declare app level module which depends on views, and components
angular.module('angularHero', [
  'ngRoute',
  'ngAnimate',
  'angularHero.view1',
  'angularHero.view2',
  'angularHero.view3',
  'angularHero.view4',
  'angularHero.contactsService',
  'angularHero.hero-transition'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
