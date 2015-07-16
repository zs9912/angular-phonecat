'use strict';

/* Controllers */
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http){
	/* $http makes an HTTP GET request to our web server, asking for phones/phones.json */
	$http.get('phones/phones.json').success(function(data){
		$scope.phones = data;				
	});
	$scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl',['$scope','$routeParams',
	function($scope, $routeParams){
		$scope.phoneId = $routeParams.phoneId;
	}
	]
);

/*
For small AngularJS applications, it's common to create just one module for all of your controllers if there are just a few.
As your application grows, it is quite common to refactor your code into additional modules. 
For larger apps, you will probably want to create separate modules for each major feature of your app.
*/