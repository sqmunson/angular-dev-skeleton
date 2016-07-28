angular.module('services', [])

    .service('GetSomethingService', ['$http',
    function                        ( $http ) {
        var endpoint = '/api/something';

        this.get = function(id) {
            return $http.get(endpoint + '/' + id)
                .then(function(resp) {
                    return resp.data;
                });
        };

        this.getAll = function() {
            return $http.get(endpoint)
                .then(function(resp) {
                    return resp.data;
                });
            };

        this.post = function(data) {
            return $http.post(endpoint, data)
                .then(function(resp) {
                    return resp.data;
                });
        };

        this.put = function(id, data) {
            return $http.put(endpoint + '/' + id, data)
                .then(function(resp) {
                    return resp.data;
                });
        };
    }]);