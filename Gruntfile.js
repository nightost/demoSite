/**
 * Created by nightost on 16/4/13.
 */
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.initConfig({
        path: {
            targetScss : ''
        },
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
        //sass css 尝试使用c来编译sass,加快编译速度
        sass: {
            main: {
                files: [{
                    "expand": true,
                    "cwd": "static/stylesheets",
                    //dest最终生成的目录与下面src参数中的设置的路径相关
                    "src": ["<%targetScss%>.scss"],
                    "dest": "public/stylesheets", //生成dist目录
                    "ext": "-debug.css"
                }],
                options: {
                    // debugInfo: true,
                    lineNumbers: true,
                    sourceMap: true
                }
            }
        },
        autoprefixer:{
            options: {
                browsers: ['last 5 versions', 'ie 9']
            },
            main:{
                files: [{
                    expand: true,
                    flatten: true,
                    "cwd": "<%targetScss%>.css",
                    'src': 'public/stylesheets/',
                    'dest': 'public/stylesheets/'
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
        },
        cssmin: {
            main: {
                files: [{
                    "expand": true,
                    "cwd": "<%targetScss%>.css",
                    'src': 'public/stylesheets/',
                    'dest': 'public/stylesheets/'
                }]
            }
        }
    });
    //sass任务
    grunt.registerTask('sass', "编译指定目录下的scss", function(appName) {
        grunt.log.ok(['要编译了，要编译了，真的要编译了！']);
        grunt.config("path.targetScss", targetScss);
        grunt.task.run("sass");
        grunt.task.run("autoprefixer");
        grunt.task.run("cssmin");
    });
}