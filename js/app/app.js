angular.module('ng-oboe', [])
	.provider('oboe', function () {
		// TODO: Add defaults.

		var oboe = function () {
			var configDefaults = {
				url: ''
				method: 'GET'
				headers: {}
				body: ''
				cached: false
				withCredentials: false
			};

			var get = function (url, config) {
				return new Oboe({});
			};
			var post = function (url, data, config) {
				return new Oboe({});
			};
			var put = function (url, data, config) {
				return new Oboe({});
			};
			var patch = function (url, data, config) {
				return new Oboe({});
			};
			var del = function (url, config) {
				return new Oboe({});
			};

			return {
				get: get,
				post: post,
				put: put,
				patch: patch,
				"delete": del
			};
		};

		this.$get = oboe;
	});

angular.module('myApp', ['ng-oboe'])
	.controller('myCtrl', function ($scope, oboe) {
		$scope.test = "Yo.";
	});