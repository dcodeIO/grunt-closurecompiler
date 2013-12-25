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
 * grunt-closurecompiler Task (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/ClosureCompiler.js for details
 */

'use strict';

module.exports = function (grunt) {

    grunt.registerMultiTask('closurecompiler', 'Compile through ClosureCompiler.js', function () {

        var options = this.options({
            "compilation_level": "SIMPLE_OPTIMIZATIONS",
            "max_processes": Number.MAX_VALUE
        });
        var banner = "";

        if (options.banner !== undefined) {
            banner = options.banner+"\n";
            delete options.banner;
        }

        var maxProcesses = options.max_processes;
        delete options.max_processes;

        if (maxProcesses < 1) {
            grunt.log.warn("max_processes must be at least 1");
            maxProcesses = 1;
        }

        var ClosureCompiler = require("closurecompiler");
        var done = this.async();
        var running = 0;
        var to = null;

        if (this.files.length === 0) {
            done();
            return;
        }

        var next = 0;

        var startClosure = function() {

            while(next < this.files.length && running < maxProcesses) {
                (function(file) {
                    var sources = file.src;
                    var dest = file.dest;

                    grunt.log.subhead("Compiling "+sources+" -> "+dest);

                    if (sources.length === 0 || !dest) {
                        grunt.log.error("Please provide at least one source and exactly one destination file.");
                    } else {
                        running++;
                        ClosureCompiler.compile(sources, options, function(error, result) {
                            if (result) {
                                grunt.file.write(dest, result=banner+result);
                                if (error) {
                                    grunt.log.warn(""+error);
                                }
                                grunt.log.ok("Complete: "+result.length);
                            } else if (error) {
                                grunt.fail.warn(error);
                            } else {
                                grunt.log.ok("Complete: no output");
                            }
                            running--;
                            startClosure(); // When a process exits, see if we can start more
                        });
                    }
                })(this.files[next++]);
            }

            if (running === 0) {
                done();
            }
        }.bind(this);

        startClosure();
    });

};
