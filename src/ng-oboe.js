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

		var ngOboe = function () {
			var request = function (url, data, config, method) {
				var params = config || defaults; // TODO: Merge these two.
				params.method = method;
				params.body = data;
				params.url = url;

				// TODO: Wrap oboe methods in angular parameters that update digest and return that object.

				return new oboe(params);
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