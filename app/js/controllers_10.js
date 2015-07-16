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

phonecatControllers.controller('PhoneDetailCtrl',['$scope','$routeParams', '$http',
	function($scope, $routeParams, $http){
		$http.get('phones/'+$routeParams.phoneId+'.json').success(function(data){
			$scope.phone = data;
			$scope.mainImageUrl = data.images[0];
		});
		/* created a setImage event handler function that will change the value of mainImageUrl. */
		$scope.setImage = function(imageUrl){
			$scope.mainImageUrl = imageUrl;
		};
		
		$scope.hello = function(name) {
			alert('Hello ' + (name || 'world') + '!');
		};
	}
	]
);