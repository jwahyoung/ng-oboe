angular.module('ng-oboe', [])
	.provider('oboe', function () {
		// TODO: Add defaults.

		var oboe = function () {
			var configDefaults = {
				url: '',
				method: 'GET',
				headers: {},
				body: null,
				cached: false,
				withCredentials: false
			};

			var request = function (url, data, config, method) {
				var params = config || configDefaults; // TODO: Merge these two.
				params.method = method;
				params.body = data;
				params.url = url;
				return new Oboe(params);
			};

			// TODO: Wrap oboe methods in angular parameters that update digest and return that object.

			return {
				get: function (url, config) {
					return request(url, null, config, 'GET');
				},
				post: function (url, data, config) {
					return request(url, data, config, 'POST');
				},
				put: function (url, data, config) {
					return request(url, data, config, 'PUT');
				},
				patch: function (url, data, config) {
					return request(url, data, config, 'PATCH');
				},
				"delete": function (url, config) {
					return request(url, null, config, 'DELETE');
				}
			};
		};

		this.$get = oboe;
	});

angular.module('myApp', ['ng-oboe'])
	.controller('myCtrl', function ($scope, oboe) {
		$scope.test = "Yo.";
	});