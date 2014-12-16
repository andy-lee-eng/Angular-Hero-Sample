'use strict';

var __savedClickedIndex = -1;

angular.module('angularHero.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'contacts', function ($scope, contacts) {
        $scope.clickedIndex = __savedClickedIndex;
        $scope.contacts = contacts.getContacts();

        $scope.clicked = function (contact) {
            $scope.clickedIndex = contact.id;
            __savedClickedIndex = contact.id;
            setTimeout(function () {
                location.hash = '#/view2/' + contact.id;
            });
        };
}]);