'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http){
	/* $http makes an HTTP GET request to our web server, asking for phones/phones.json */
	$http.get('phones/phones.json').success(function(data){
		//$scope.phones = data;		
		$scope.phones = data.splice(0, 5);
	});
	$scope.orderProp = 'age';
}]);

/*
function PhoneListCtrl($scope, $http) {...}
PhoneListCtrl.$inject = ['$scope', '$http'];
phonecatApp.controller('PhoneListCtrl', PhoneListCtrl);
*/