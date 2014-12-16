'use strict';

angular.module('angularHero.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:id', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$routeParams', 'contacts', function($scope, $routeParams, contacts) {
        $scope.contact = contacts.getContact(parseInt($routeParams.id));

        $scope.clickedNext = function () {
            location.hash = '#/view3/' + $routeParams.id;
        };
}]);