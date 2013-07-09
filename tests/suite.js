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
 * grunt-closurecompiler Tests (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/ClosureCompiler.js for details
 */

'use strict';

var grunt = require('grunt');

exports.closurecompiler = {

    "Gruntfile.min.js": function (test) {
        test.doesNotThrow(function() {
            var src = grunt.file.read(__dirname+"/../Gruntfile.min.js");
            test.ok(src.indexOf("grunt-closurecompiler (c)") >= 0);
        });
        test.done();
    }
};
