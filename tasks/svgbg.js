'use strict';
const SvgGenerator = require('../svgbg');
const Config = require('../svgbg/plugins/config');

module.exports = function (grunt) {
  grunt.registerMultiTask('svgbg', 'Generate SVG Background CSS', function() {
    console.log(Config(this.data));
    const svgGen = new SvgGenerator(Config(this.data));
    svgGen.build(() => {
      grunt.log.writeln('Successfully built all templates.');
    });
  });
};