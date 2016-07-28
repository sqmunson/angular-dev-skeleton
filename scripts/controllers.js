angular.module('controllers', ['services'])

    .controller('AppController', ['GetSomethingService',
    function                     ( GetSomethingService ) {

        console.log('AppCtrl instantiated');

        this.getAll = function() {
            GetSomethingService.getAll()
                .then(function(data) {
                    console.log(data);
                });
        };

        this.post = function() {
            var data = {
                prop1: 'prop1',
                prop2: 'prop2'
            };

            GetSomethingService.post(data)
                .then(function(data) {
                    console.log(data);
                });
        };

        this.put = function() {
            var data = {
                prop1: 'prop2',
                prop2: 'prop3'
            };

            GetSomethingService.put(data)
                .then(function(data) {
                    console.log(data);
                });
        };
    }])

    .controller('FirstController', [function() {}])

    .controller('SecondController', [function() {}]);