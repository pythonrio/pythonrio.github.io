'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: ["assets/static/less/**/*.less"],
            tasks: ["less", "cssmin"]
        },
        // "less"-task configuration
        less: {
            // production config is also available
            development: {
                options: {
                    // Specifies directories to scan for @import directives when parsing.
                    // Default value is the directory of the source, which is probably what you want.
                    paths: ["assets/static/less/"],
                },
                files: {
                    // compilation.css  :  source.less
                    "assets/static/css/main.unminified.css": "assets/static/less/main.css.less"
                }
            },
        },
        cssmin: {
            target: {
                files: {
                    'assets/static/css/main.css': ['assets/static/css/main.unminified.css']
                }
            }
        },
    });
     // the default task (running "grunt" in console) is "watch"
     grunt.registerTask('default', ['watch']);
};