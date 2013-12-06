module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        concat : {
            domop : {
                src: ['src/jquery-1.9.1.js', 'src/jquery-ui-1.10.3.custom.js'],
                dest: 'dest/domop.js'
            }
        },
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : 'dest/domop.js',
                dest : 'dest/domop.min.js'
            },
            build:{
                src:'dest/test.css',
                dest:'dest/test.min.css'
            }
        },
        mincss: {
          compress: {
            files: {
              "dest/output.css": "dest/test.css"
            }
          }
        }
    });
    // 载入concat和uglify插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-mincss');
    // 注册任务
    grunt.registerTask('default', ['concat', 'uglify', 'mincss']);
}; 