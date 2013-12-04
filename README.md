The ClosureCompiler.js Grunt Task [![Build Status](https://travis-ci.org/dcodeIO/grunt-closurecompiler.png?branch=master)](https://travis-ci.org/dcodeIO/grunt-closurecompiler)
=================================
Yet simple, but powerful. Available through [npm](https://npmjs.org/package/grunt-closurecompiler).

Usage
-----

```javascript
grunt.initConfig({
    closurecompiler: {
        minify: {
            files: {
                // Destination: Sources...
                "Gruntfile.min.js": [__filename]
            },
            options: {
                // Any options supported by Closure Compiler, for example:
                "compilation_level": "SIMPLE_OPTIMIZATIONS",
                
                // Plus a simultaneous processes limit
                "max_processes": 5,

                // And an option to add a banner, license or similar on top
                "banner": "/* hello world! */"
            }
        }
    },
});

grunt.registerTask('minify', ['closurecompiler:minify']);
```

**Run it:** `grunt minify`

See also: [Gruntfile.js](https://github.com/dcodeIO/grunt-closurecompiler/blob/master/Gruntfile.js)

Works like any other Grunt plugin/task. See the [ClosureCompiler.js](https://github.com/dcodeIO/ClosureCompiler.js)
project for detailed information on available options and [the Grunt website](http://gruntjs.com/) for everything Grunt.

License
-------
Apache License, Version 2.0 - http://www.apache.org/licenses/LICENSE-2.0.html
