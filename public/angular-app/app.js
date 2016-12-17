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
			templateUrl: 'angular-app/brothers-list/brothers-list.html',
			controller: BrothersController,
			controllerAs: 'vm',
			access: {
				restricted: false
			}
		})
		.when('/families', {
			templateUrl: 'angular-app/families/families.html',
			access: {
				restricted: false
			}
		})
		.when('/rush', {
			templateUrl: 'angular-app/rush/rush.html',
			access: {
				restricted: false
			}
		})
		.when('/events', {
			templateUrl: 'angular-app/events/events.html',
			access: {
				restricted: false
			}
		})
		.when('/alfienityzmb', {
			templateUrl: 'angular-app/alfienityzmb/alfienityzmb.html',
			controller: AlfienityZmbController,
			controllerAs: 'vm',
			access: {
				restricted: true
			}
		})
		.otherwise({
			redirectTo: '/'
		});
}