describe('linkTo directive', function() {
	var $link,
		$compile,
		$rootScope,
		$scope;

	var $;

	beforeEach(function() {
		module('directives');

		$ = angular.element;

		inject(function($injector) {
			$rootScope = $injector.get('$rootScope');
			$compile = $injector.get('$compile');

			$scope = $rootScope.$new();

			$link = $compile('<a link-to="/test">Test Page</a>')($scope);
		});
	});

	it('should add a hash to the url', function() {
		expect($($link).attr('href')).toBe('/#/test');
	});
});