ng-oboe
=======

An Angular wrapper for Jim Higson's [oboe.js](https://github.com/jimhigson/oboe.js), following Angular's `$http` module conventions. Thanks for Jim for creating such a cool library!

Usage:
------

To use ng-oboe, add the 'ng-oboe' module as an app dependency.

	angular.module('myApp', ['ng-oboe'])

With ng-oboe as an app dependency, we can now inject oboe into a controller, service, factory, etc. and call oboe methods.

	.controller('myCtrl', function ($scope, oboe) {
		$scope.items = [];

		oboe.get('test.json')
			.start(function (data, etc) {
				console.log("Dude! We're goin'!", data, etc);
			})
			.node('items.*', function (value) {
				$scope.items.push(value);
			})
			.done(function (value) {
				console.log("It works! ", value);
			})
			.fail(function (error) {
				console.log("Error: ", error);
			});
			
This oboe wrapper supports `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`, used just like the equivalent methods on the `$http` object. The oboe wrapper, once called with one of the methods above, will return an object exposing oboe's events (such as `.on()` and `.node()`).

_NOTE: Due to angular conventions, oboe's `.done()` and `.fail()` functions are are also aliased to `.success()` and `.error()`, respectively. This (hopefully) should allow ng-oboe to serve as a drop-in replacement to `$http` without any code changes._

This library isn't ready for primetime yet, but it's usable to a certain extent. Please feel free to check it out!
		
