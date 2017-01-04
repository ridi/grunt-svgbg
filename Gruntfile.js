'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    svgbg: {
      default: {
        src: 'test/src',
        minify: {
          dest: 'test/dist',
        },
        templates: [
          {
            name: 'svg_icon_full',
            type: 'less',
            dest: [ 'test/dist' ],
            template: 'test/templates/sample.less.hbs',
            etc: {
              a: 'b',
            }
          },
          {
            name: 'page_svg_icon',
            type: 'less',
            dest: [ 'test/dist' ],
            template: 'test/templates/sample_page.less.hbs'
          },
          {
            name: 'svg-icon',
            type: 'html',
            dest: [ 'test/dist' ],
            template: 'test/templates/sample.html.hbs'
          }
        ]
      }
    },
    clean: {
      test: ['test/dist']
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default', ['clean', 'svgbg']);
};
