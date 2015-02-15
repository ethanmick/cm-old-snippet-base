var util = require('util');
var glob = require('glob');
var config = require('./config');

module.exports = function(grunt) {
  var filesToSkip = ['Gruntfile.js'];
  var filePaths = glob.sync('*.js', {cwd: 'src/'}).filter(function(filePath) {
    return filesToSkip.indexOf(filePath) < 0;
  });

  var files = function(env){
    return filePaths.reduce(function(files, filePath) {
      files[util.format('bin/%s/%s', env, filePath)] = 'src/' + filePath;
      return files;
    }, {});
  };

  grunt.initConfig({
    render: {
      production: {
        options: config['production'],
        files: files('production')
      }
    },

    deploy: {
      production: {
        options: config['production']
      }
    }
  });

  grunt.loadTasks('tasks/');
  grunt.loadNpmTasks('grunt-ejs-render');
  grunt.registerTask('default', ['render:production']);
  grunt.registerTask('rd', ['render:production', 'deploy:production']);
  grunt.registerTask('rd-production', ['render:production', 'deploy:production']);
};
