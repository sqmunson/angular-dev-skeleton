describe('AppController', function() {
	var AppCtrl,
		$rootScope,
		$scope,
		$controller;

	beforeEach(function() {
		module('app');

		inject(function($injector) {
			$controller = $injector.get('$controller');
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();

			AppCtrl = $controller('AppController', { $scope: $scope });
		});
	})

	it('should', function() {

	});
});