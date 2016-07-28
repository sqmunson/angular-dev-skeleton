angular.module('app', ['routes','controllers','directives'])

.controller('AppController', ['$http',function($http) {
	$http.get('/api/public/content/experience/e-efe737b7e7d5d1')
		.then(function(data) {
			console.log(data);
		});

	console.log('HI!');
	console.log('YAAAAAY!');
	console.log('and again');
}]);
angular.module('controllers', [])

.controller('LoginCtrl', [function() {

}])

.controller('ElseCtrl', [function() {

}])

.controller('SomethingCtrl', [function() {

}])
angular.module('directives', [])

.directive('something', [function() {
	return {
		restrict: 'E',
		scope: {},
		link: function() {
			console.log('MORE!');
		}
	}
}])
angular.module('routes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
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
		})
}]);
