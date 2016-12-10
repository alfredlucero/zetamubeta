angular.module('zmbApp', ['ngRoute'])
	.config(config);

function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'angular-app/main/main.html',
			access: {
				restricted: false
			}
		})
		.when('/about', {
			templateUrl: 'angular-app/about/about.html',
			access: {
				restricted: false
			}
		})
		.when('/brothers', {
			templateUrl: 'angular-app/brothers/brothers.html',
			access: {
				restricted: false
			}
		})
		.when('/family', {
			templateUrl: 'angular-app/family/family.html',
			access: {
				restricted: false
			}
		})
		.when('/alfienityzmb', {
			templateUrl: 'angular-app/alfienityzmb/alfienityzmb.html',
			access: {
				restricted: true
			}
		})
		.otherwise({
			redirectTo: '/'
		});
}