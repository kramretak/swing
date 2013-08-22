module.exports = function(grunt) {

    grunt.initConfig({
        clean: {
            style: ['styleguide']
        },
        copy: {
            styleguide: {
                files: [
                    { src: ['sass/styleguide.md'], dest: 'sass/styleguide.md'}
                ]
            }
        },
        sass: {
            development: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/styles.css': 'sass/styles.scss'
                }
            },
            production: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/styles.min.css': 'sass/styles.scss'
                }
            }
        },
        shell: {
            styleguide: {
                command: 'kss-node css styleguide --sass sass/styles.scss --template styleguide-template'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['clean', 'sass', 'copy', 'shell']);
};
