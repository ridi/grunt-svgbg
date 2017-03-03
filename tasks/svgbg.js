const Svgbg = require('svgbg');
const Config = require('svgbg/plugins/config');

module.exports = function (grunt) {
  grunt.registerMultiTask('svgbg', 'Generate SVG Background CSS', function() {
    const svgbg = new Svgbg(Config(this.data));
    svgbg.build(() => {
      grunt.log.writeln('Successfully built all templates.');
    });
  });
};
