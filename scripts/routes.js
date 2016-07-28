angular.module('routes', ['ngRoute'])

	.config(['$routeProvider',
	function( $routeProvider ) {
		$routeProvider
			.when('/', {
				controller: 'AppController',
				controllerAs: 'AppCtrl',
				templateUrl: 'views/app.html'
			})
			.when('/first', {
				controller: 'FirstController',
				controllerAs: 'FirstCtrl',
				templateUrl: 'views/first.html'
			})
			.when('/second', {
				controller: 'SecondController',
				controllerAs: 'SecondCtrl',
				templateUrl: 'views/second.html'
			})
			.otherwise({redirectTo: '/'});
	}]);