# grunt-svgbg
Turn your svg files to css backgrounds with grunt

## Usage
Below is a sample grunt config. 
```
svgbg: {
	default: {
	  root: __dirname,
	  src: 'src',
	  minify: {
	    dest: 'dist/svg',
	    options: {
        plugins: [
          { transformsWithOnePath: true },
        ],
      },
	  },
	  templates: [
	    {
	      name: 'sample',
	      type: 'less',
	      dest: [ 'dist/less' ],
	      template: 'templates/sample.less.hbs',
	      etc: {
	        a: 'b',
	      }
	    },
	    {
	      name: 'sample_page',
	      type: 'less',
	      dest: [ 'dist/less' ],
	      template: 'templates/sample_page.less.hbs'
	    },
	    {
	      name: 'sample_page',
	      type: 'html',
	      dest: [ 'dist' ],
	      template: 'templates/sample.html.hbs'
	    }
	  ]
	}
}
```
   
#### root
Root path. Should be an absolute path for now(use 'path' module).
Project root is default.

#### src
SVG source files' directory.
 
#### minify
SVGO options and destination for optimized svg files.
Default SVGO config for Svgbg is: 
```
{
  "plugins": [
    { "removeTitle": true },
    { "removeDimensions": true },
    { "removeStyleElement": true },
    { "removeAttrs": {
        "attrs": "path:(fill|id|clip-path|fill-rule|clip-rule)"
      }
    }
  ]
}
```
You can override it with minify.options. 

#### templates
Custom template configs. Handlebars.js is used as template engine here.
- name: output file name
- type: output file type(extname)
- dest: output destination(array)
- template: template file path
- etc: custom values to use building the template

Svgbg provides next values extracted from optimized svg for template:
```
{
  name: "filename",
  viewBox: {
    width: 16,
    height: 16,
  },
  pathList: [ "pathString1", "pathString2", ... ],
  shapeList: [ "shapeString1", "shapeString2", ... ], 
  fullSvgStr: "minifiedSvgString",
}
```
