/*
 Copyright 2013 Daniel Wirtz <dcode@dcode.io>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * @license grunt-closurecompiler (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/ClosureCompiler.js for details
 */

'use strict';
module.exports = function (grunt) {
    
    // No need for massive test cases, let's just minify our Gruntfile.
    grunt.initConfig({
        clean: ["Gruntfile.min.js"],
        closurecompiler: {
            test: {
                files: {
                    "Gruntfile.min.js": [__filename]
                },
                options: {
                    "compilation_level": "SIMPLE_OPTIMIZATIONS"
                }
            }
        },
        nodeunit: {
            tests: ['tests/suite.js']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('test', ['clean', 'closurecompiler:test', 'nodeunit']);
    grunt.registerTask('default', ['test']);

};
