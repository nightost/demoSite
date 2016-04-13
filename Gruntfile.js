/**
 * Created by nightost on 16/4/13.
 */
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.initConfig({
        less : {
            development: {
                files: [{
                    "expand": true,
                    "cwd": "static/stylesheets",
                    "src": ['*.less'],
                    "dest": "public/stylesheets",
                    "flatten": true,
                    "ext" : '.css'
                }]
            }
        },
        watch : {
            css: {
                files: ['static/**/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false
                }
            }
        }
    })
}