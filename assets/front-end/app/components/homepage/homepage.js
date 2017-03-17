'use strict';

angular.module('alPortfolio.homepage', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/homepage', {
    templateUrl: 'front-end/app/components/homepage/homepage.html',
    controller: 'HomepageCtrl'
  });
}])

.controller('HomepageCtrl', [function () {

}]);
