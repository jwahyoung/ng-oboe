
angular.module('myApp', ['ng-oboe'])
	.config(function (oboeProvider) {
		/* If we were so inclined, we could change the oboe defaults here - headers, etc. */
		// oboeProvider.defaults = {};
	})
	.controller('myCtrl', function ($scope, oboe) {
		$scope.test = "Yo.";
		$scope.items = [];

console.log(oboe.get('test.json'));

		oboe.get('test.json')
			.node('items.*', function (value) {
				// Calling $scope.$apply won't be necessary after wrapping these functions.
				$scope.$apply(function () {
					$scope.items.push(value);

				})
			})
			.fail(function (error) {
				console.log("Error: ", error);
			});
	});