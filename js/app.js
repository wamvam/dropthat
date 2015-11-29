//Initiate the angular module
var dropitApp = angular.module("dropitApp", [
		"ngRoute",
		"dropitControllers"
]);

dropitApp.config(["$routeProvider",
		function($routeProvider){
			$routeProvider.
				when("/", {
					templateUrl : "partials/main.html",
					controller : "MainCtrl"
				});
		}]);