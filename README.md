The ClosureCompiler.js Grunt Task [![Build Status](https://travis-ci.org/dcodeIO/grunt-closurecompiler.png?branch=master)](https://travis-ci.org/dcodeIO/grunt-closurecompiler)
=================================
Yet simple, but powerful. Available through [npm](https://npmjs.org/package/grunt-closurecompiler).

Usage
-----

```javascript
grunt.initConfig({
    closurecompiler: {
        compile: {
            files: {
                // Destination: Sources...
                "Gruntfile.min.js": [__filename]
            },
            options: {
                // Any options supported by Closure Compiler, for example:
                "compilation_level": "SIMPLE_OPTIMIZATIONS"
            }
        }
    },
});
```

See also: [Gruntfile.js](https://github.com/dcodeIO/grunt-closurecompiler/blob/master/Gruntfile.js)

Works like any other Grunt plugin/task. See the [ClosureCompiler.js](https://github.com/dcodeIO/ClosureCompiler.js)
project for detailed information on available options and [the Grunt website](http://gruntjs.com/) for everything Grunt.

License
-------
Apache License, Version 2.0 - http://www.apache.org/licenses/LICENSE-2.0.html
