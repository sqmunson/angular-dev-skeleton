angular.module('services', [])

	.service('GetSomethingService', ['$http',
	function						( $http ) {
		var endpoint = '/api/public/content/experience';

		this.get = function(id) {
			return $http.get(endpoint + '/' + id)
				.then(function(resp) {
					return resp.data;
				});
		};
	}]);