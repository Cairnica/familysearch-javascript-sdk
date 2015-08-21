module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    src: ['src/**/*.js'],

    clean: {
      dist: ['dist/<%= pkg.version %>']
    },

    ngdocs: {
      options: {
        dest: 'dist/<%= pkg.version %>',
        html5Mode: false,
        title: 'FamilySearch Javascript SDK',
        bestMatch: false
      },
      all: ['<%= src %>']
    },

    jshint: {
      src: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['<%= src %>']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/unit/*.js']
      }
    },

    'gh-pages': {
      options: {
        base: 'dist',
        message: 'Update docs and files to distribute',
        add: true
      },
      travis: {
        options: {
          repo: 'https://' + process.env.GH_TOKEN + '@github.com/FamilySearch/familysearch-javascript-sdk.git',
          user: {
            name: 'Travis',
            email: 'travis@travis-ci.org'
          },
          silent: true
        },
        src: ['**/*']
      }
    },

    copy: {
      dist: {
        files: [{
          cwd: '.',
          src: 'bower.json',
          dest: 'dist/<%= pkg.version %>',
          expand: true
        }]
      }
    },
    
    run: {
      jasmine: {
        exec: 'npm run jasmine'
      },
      coveralls: {
        exec: 'npm run coveralls'
      },
      browserify: {
        exec: 'node_modules/.bin/browserify src/FamilySearch.js --standalone FamilySearch > dist/<%= pkg.version %>/familysearch-javascript-sdk.js'
      }
    },
    
    uglify: {
      build: {
        files: {
          'dist/<%= pkg.version %>/familysearch-javascript-sdk.min.js': 'dist/<%= pkg.version %>/familysearch-javascript-sdk.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-ngdocs');
  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask('test', [
    'jshint',
    'run:jasmine'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'test',
    'ngdocs',
    'run:browserify',
    'uglify',
    'copy:dist'
  ]);

  grunt.registerTask('travis', [
    'build',
    'run:coveralls',
    'gh-pages:travis'
  ]);

  // Default task(s)
  grunt.registerTask('default', ['build']);
};
