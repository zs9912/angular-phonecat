'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',  
  'phonecatControllers'  
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list_7.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', { //when the URL hash fragment matches '/phones/:phoneId'
        templateUrl: 'partials/phone-detail_8.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
