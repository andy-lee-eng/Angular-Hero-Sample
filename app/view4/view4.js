'use strict';

angular.module('angularHero.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4/:id', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope', '$routeParams', 'contacts', function ($scope, $routeParams, contacts) {
        $scope.contact = contacts.getContact(parseInt($routeParams.id));
        
        $scope.clickedNext = function () {
            location.hash = '#/view1';
        };
    }]);