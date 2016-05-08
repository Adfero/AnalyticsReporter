module.exports = function(grunt) {
  var uglify_files = {
    'public/build/app.js': [
      'public-dev/js/vendor/angular.min.js',
      'public-dev/js/vendor/jquery-2.2.3.js',
      'public-dev/js/vendor/moment.js',
      'public-dev/js/vendor/*.js',
      'public-dev/js/services/*.js',
      'public-dev/js/controllers/*.js',
      'public-dev/js/app.js'
    ]
  };
  var sass_files = {
    'public/build/main.css' : 'public-dev/scss/main.scss'
  };

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    'clean': ['./public/build'],
    'uglify': {
      'dist': {
        'files': uglify_files
      },
      'dev': {
        'options': {
          'compress': false,
          'mangle': false,
          'beautify': true
        },
        'files': uglify_files
      }
    },
    'sass': {
      'dist': {
        'options': {
          'style': 'compressed',
          'sourcemap': 'none'
        },
        'files': sass_files
      },
      'dev': {
        'options': {
          'style': 'expanded'
        },
        'files': sass_files
      }
    },
    'watch': {
      'css': {
        'files': 'public-dev/scss/**.scss',
        'tasks': ['sass:dev']
      },
      'js': {
        'files': 'public-dev/js/**',
        'tasks': ['uglify:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default', ['dev','watch']);
  grunt.registerTask('dev', ['uglify:dev','sass:dev']);
  grunt.registerTask('dist', ['clean','uglify:dist','sass:dist']);
};
