'use strict';

angular.module('angularHero.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3/:id', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', '$routeParams', 'contacts', function ($scope, $routeParams, contacts) {
        $scope.contact = contacts.getContact(parseInt($routeParams.id));
        
        $scope.clickedNext = function () {
            location.hash = '#/view4/' + $routeParams.id;
        };
    }]);