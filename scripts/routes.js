angular.module('routes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'AppController',
			controllerAs: 'AppCtrl',
			templateUrl: 'views/app.html'
		})
		.when('/login', {
			controller: 'LoginCtrl',
			controllerAs: 'LoginCtrl',
			templateUrl: 'views/login.html'
		})
		.when('/something', {
			controller: 'SomethingCtrl',
			controllerAs: 'SomethingCtrl',
			templateUrl: 'views/something.html'
		})
		.when('/else', {
			controller: 'ElseCtrl',
			controllerAs: 'ElseCtrl',
			templateUrl: 'views/else.html'
		});
}]);