
angular.module('myApp', ['ng-oboe'])
	.controller('myCtrl', function ($scope, oboe) {
		$scope.test = "Yo.";
	});