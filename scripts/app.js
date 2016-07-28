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