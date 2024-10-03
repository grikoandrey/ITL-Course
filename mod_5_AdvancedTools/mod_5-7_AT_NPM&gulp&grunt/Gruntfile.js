module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {
                    'dist/style.css': 'src/styles/style.scss'
                }
                // files: [{
                //     expand: true,
                //     cwd: 'src/styles',
                //     src: ['*.scss'],
                //     dest: 'dist',
                //     ext: '.css'
                // }]
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/style.min.css': ['dist/style.css']
                }
            }
        },
        clean: ['dist/style.css', 'dist/*.map'],
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['src/styles/*.scss'],
                tasks: ['sass', 'cssmin', 'clean'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default');

};