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
                    'styles.doc.css': 'sass/styles.scss'
                }
            },
            production: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'styles.css': 'sass/styles.scss'
                }
            }
        },
        shell: {
            styleguide: {
                command: 'kss-node ./ styleguide --css ./styles.doc.css --template styleguide-template'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['clean', 'sass', 'copy', 'shell']);
};
