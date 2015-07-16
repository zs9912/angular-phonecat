'use strict';

/* Controllers */
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', function ($scope, Phone){		
	$scope.phones = Phone.query();					
	$scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl',['$scope','$routeParams', 'Phone',
	function($scope, $routeParams, Phone){
		
		$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
			$scope.mainImageUrl = phone.images[0];	
		});		
		
		/* created a setImage event handler function that will change the value of mainImageUrl. */
		$scope.setImage = function(imageUrl){
			$scope.mainImageUrl = imageUrl;
		};
		
	}
	]
);