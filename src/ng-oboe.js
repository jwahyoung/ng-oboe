angular.module('ng-oboe', [])
	.provider('oboe', function () {
		var defaults = {
			url: '',
			method: 'GET',
			headers: {},
			body: null,
			cached: false,
			withCredentials: false
		};

		var ngOboe = function ($rootScope, $timeout) {
			function oboeWrapper(params) {
				var stream = oboe(params);
				var on = function (event, pattern, callback) {
					function wrappedCallback () {
						var args = arguments;

						return $rootScope.$apply(function () {
							return callback.apply(null, args); // Null as this may cause issues.
						});
					}

					return stream.on(event, pattern, wrappedCallback);
				};

				return {
					start: function (callback) {
						return on('start', callback);
					},
					node: function (pattern, callback) {
						return on('node', pattern, callback);
					},
					path: function (pattern, callback) {
						return on('path', pattern, callback);
					},
					success: function (callback) {
						return on('done', callback);
					},
					done: function (callback) {
						return on('done', callback);
					},
					error: function (callback) {
						return on('fail', callback);
					},
					fail: function (callback) {
						return on('fail', callback);
					},
				};
			};

			var request = function (url, data, config, method) {
				var params = config || defaults; // TODO: Merge these two.
				params.method = method;
				params.body = data;
				params.url = url;

				// TODO: Wrap oboe methods in angular parameters that update digest and return that object.

				return oboeWrapper(params);
			};

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

		this.defaults = defaults;
		this.$get = ngOboe;
	});