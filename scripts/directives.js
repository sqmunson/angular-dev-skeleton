angular.module('directives', [])

	.directive('linkTo', [function() {
		return {
			restrict: 'A',
			link: function(scope, $element) {
				$element.attr('href', '/#' + $element.attr('link-to'));
			}
		};
	}]);