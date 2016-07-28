angular.module('controllers', ['services'])

	.controller('AppController', ['GetSomethingService',
	function					 ( GetSomethingService ) {

		console.log('AppCtrl instantiated');

		GetSomethingService.get('e-efe737b7e7d5d1')
			.then(function(data) {
				console.log(data);
			});
	}])

	.controller('FirstController', [function() {}])

	.controller('SecondController', [function() {}]);