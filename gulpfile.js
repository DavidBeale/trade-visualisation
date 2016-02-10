
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var plugins = require('gulp-load-plugins')();
var del = require('del');
var watch = require('gulp-watch');
var browserify = require('browserify');
var watchify = require('watchify');
var _ = require('lodash');
var source = require('vinyl-source-stream');
var runSequence = require('run-sequence');



var sources = ['app/**/*.js', '!app/lib/**', 'gulpfile.js'];
var isDev = false;


gulp.task('default', ['test', 'watch']);


gulp.task('test', function(){
	runSequence('clean', 'lint', 'copy-assets', 'copy-lib-assets', 'build');
});


gulp.task('build', function() {
	return runBrowserify({
		isDev : isDev,
		src: './app/main.js',
		bundle: 'app.js',
		dest: 'dist'
	});
});


gulp.task('build-tests', function() {
	return runBrowserify({
		isDev : isDev,
		src: './test/test.js',
		bundle: 'test.js',
		dest: 'dist/test'
	});
});



gulp.task('clean', function(callback){
	return del(['dist'], callback);
});




gulp.task('lint', function() {
	return gulp.src(sources)
			.pipe(plugins.jshint('.jshintrc'))
				.pipe(plugins.jshint.reporter('default'));
});



gulp.task('watch', function() {
	isDev = true;

	runSequence('test');

	watch(['./app/**', 'gulpfile.js'], function() {
		gulp.start('test');
	});	
});

 
gulp.task('copy-assets', function() {
	return gulp.src(['./app/*.html', './app/*.json', './app/lib/**'])
		.pipe(gulp.dest('dist/'));
}); 


gulp.task('copy-lib-assets', function() {
	return gulp.src(['./app/lib/**'])
		.pipe(gulp.dest('dist/lib/'));
}); 


function runBrowserify(config)
{
	var setup = {
		entries: config.src,
		paths: ['./node_modules', './app/'],
		excludes: ['d3']
	};

	if (config.isDev)
	{
		_.extend(setup, watchify.args, { debug: true });
	}

	var b = browserify(setup);

	if (config.isDev)
	{
		b = watchify(b);
      	b.on('update', bundle);
      	b.on('log', gutil.log);
	}

	function bundle()
	{
		return b
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
				.pipe(source(config.bundle))
					.pipe(gulp.dest(config.dest));
	}

	return bundle();
}

