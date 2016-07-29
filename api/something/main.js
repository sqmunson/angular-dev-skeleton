module.exports = function(http) {
    'use strict';

    var path = require('path'),
        grunt = require('grunt'),
        shortid = require('shortid'),
        extend = require('lodash').extend;

    function idFromPath(path) {
        return path.match(/[^\/]+$/)[0];
    }

    function objectPath(id) {
        return path.resolve(__dirname, './' + id + '.json');
    }

    http.whenGET('/api/something/**', function(request) {
        // request.pathname (String)
        // request.body (Object)
        // request.query (Object)

        var id = idFromPath(request.pathname),
            filePath = objectPath(id);

        try {
            this.respond(200, extend(grunt.file.readJSON(filePath)));
        } catch(e) {
            this.respond(404, 'Not Found');
        }
    });

    http.whenGET('/api/something', function(request) {
        var allThings = grunt.file.expand(path.resolve(__dirname, './*.json'))
            .map(function(path) {
                var id = path.match(/[^\/]+(?=\.json)/)[0];

                return extend(grunt.file.readJSON(path));
            })
            .filter(function(user) {
                var ids = request.query.ids,
                    idArray = (ids || '').split(','),
                    id = user.id;

                return !ids || idArray.indexOf(id) > -1;
            });

        try {
            this.respond(200, allThings);
        } catch(e) {
            this.respond(404, 'Not Found');
        }
    });

    http.whenPOST('/api/something', function(request) {
        var id = shortid.generate(),
            filePath = objectPath(id),
            thing = extend({}, request.body, {id: id});

        try {
            grunt.file.write(filePath, JSON.stringify(thing, null, '    '));
            this.respond(200, thing);
        } catch(e) {
            this.respond(401, 'Not Authorized');
        }
    });

    http.whenPUT('/api/something/**', function(request) {
        var id = idFromPath(request.pathname),
            filePath = objectPath(id),
            thing = grunt.file.readJSON(filePath),
            updated = extend(thing, request.body);

        grunt.file.write(filePath, JSON.stringify(updated, null, '    '));

        this.respond(200, updated);
    });
}