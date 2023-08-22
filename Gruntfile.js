module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: false,
                },
                files: {
                    'dist/styles.css': 'src/main.less'
                }
            }
        },
        uglify: {
            options: {
                compress: true, // Comprimir o código JS
                mangle: true // Minificar nomes de variáveis
            },
            target: {
                files: {
                    'dist/main.min.js': ['src/main.js'] // Caminho de entrada e saída do arquivo JS
                }
            }
        },
        watch: {
            styles: {
                files: ['src/**/*.less'], // Ver mudanças em arquivos Less
                tasks: ['less']
            },
            scripts: {
                files: ['src/**/*.js'], // Ver mudanças em arquivos JS
                tasks: ['uglify']
            }
        }
    });

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Tarefas padrão
    grunt.registerTask('default', ['less', 'uglify', 'watch']);
};
