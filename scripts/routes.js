angular.module('routes', ['ngRoute'])

    .config(['$routeProvider',
    function( $routeProvider ) {
        $routeProvider
            .when('/', {
                controller: 'AppController',
                controllerAs: 'AppCtrl',
                templateUrl: 'views/app.html'
            })
            .otherwise({redirectTo: '/'});
    }]);