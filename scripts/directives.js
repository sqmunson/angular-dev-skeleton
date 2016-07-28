angular.module('directives', [])

.directive('something', [function() {
	return {
		restrict: 'E',
		scope: {},
		link: function() {
			console.log('MORE!');
		}
	};
}]);