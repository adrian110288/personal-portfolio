'use strict';

// Declare app level module which depends on views, and components
angular.module('alPortfolio', [
  'ngRoute',
  'alPortfolio.homepage'
]).
config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({
    redirectTo: '/homepage'
  });
}]);
