#!/usr/bin/env node
"use strict";
var argv = require('optimist').boolean('v').argv;
var util = require('util');
var PATH = require('path');
var FS = require('fs');

/** Search `filename` from sub paths of `from_path` */
function do_search(from_path, filename) {
	var count = 0;

	function do_step(path, file) {
		count += 1;

		if(argv.v) {
			util.debug('Searching from: ' + path);
		}

		if(FS.existsSync(PATH.join(path, file))) {
			return path;
		}
		if(path === '/') {
			return;
		}
		if(count > 1000) {
			throw new TypeError("Internal loop limit reached (1000)");
		}
		return do_step(PATH.dirname(path), file);
	}

	return do_step(from_path, filename);
}

/** If `x` is empty, prefix with `prefix_a`, otherwise `prefix_b` */
function empty(x, prefix_a, prefix_b) {
	if( (''+x).length === 0) {
		return ''+prefix_a;
	}
	return ''+prefix_b+x;
}

try {
	var info;
	var home = process.env.HOME;
	var cwd = process.cwd();

	// NPM directories
	var project_path = do_search(cwd, "package.json");
	if(project_path) {
		try {
			info = require( PATH.join(project_path, "package.json") );
			console.log( 'npm:' + info.name + '@' + info.version + ' ' + empty(PATH.relative(project_path, cwd), '.', './') );
			return;
		} catch(e) {
			if(argv.v) {
				util.error('nor-ps1: error: ' + (e.stack || e) );
			}
		}
	} 

	// Git directories
	var git_path = do_search(cwd, ".git");
	if(git_path) {
		console.log( 'git: ' + empty(PATH.relative(git_path, cwd), '.', './') );
		return;
	}

	// Home directories
	if(home && cwd) {
		info = PATH.relative(home, cwd);
		console.log( empty(PATH.relative(home, cwd), '~', '~/') );
		return;
	}

	// Process directory
	if(cwd) {
		console.log( cwd );
		return;
	}

	throw new TypeError("Failed to detect any directory");
} catch(err) {
	if(argv.v) {
		util.error('nor-ps1: error: ' + (err.stack || err) );
	} else {
		util.error('nor-ps1: error: ' + err);
	}
	console.log('\\w');
}

/* EOF */
