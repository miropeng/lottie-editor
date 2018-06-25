var gulp = require('gulp')
var webpack = require('webpack-stream')
var path = require('path')
var fs = require('fs')
var header = require('gulp-header')
var uglify = require('gulp-uglify')
var babel = require('gulp-babel');
var clean = require('gulp-clean');

var webpackConfig = {
	entry: './src/index.js',
	output: {
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			'vue$': __dirname + '/lib/vue/2.4.4/vue.js',
			'vue-router': __dirname + '/lib/vue-router/2.7.0/vue-router.js'
		}
	},
	watch: false,
	module: {
		loaders: [
			{ test: /\.vue$/, loader: 'vue-loader' },
			{ test: /\.html$/, loader: 'html-loader' }
		]
	}
}

var banner = `/*!
lottie editor v1.0
Copyright (c) ${(new Date).getFullYear()}
Powered by Tencent-Video Web Front End Team
Update: ${(new Date).toDateString()} ${(new Date).toTimeString()}
 */
`

function build(cb) {
	var start = +new Date;
	gulp.src('')
		.pipe(webpack(webpackConfig))
		.pipe(header(banner))
		.pipe(gulp.dest(__dirname + '/dist/'))
		.on('end', e => {
			var end = +new Date()
			console.log('编译完成，耗时:' + (end - start) + 'ms')
		})
}
function release() {
	var start = +new Date
	gulp.src('')
		.pipe(webpack(webpackConfig))
		.pipe(babel({ presets: ['es2015'] }))
		.pipe(uglify())
		.on('error', function (err) {
			console.log('[uglify Error]', err.toString());
		})
		.pipe(header(banner))
		.pipe(gulp.dest(__dirname + '/release/'))
		.on('end', e => {
			var end = +new Date()
			console.log('编译完成，耗时:' + (end - start) + 'ms')
		})
}

gulp.task('dev', build)
gulp.task('release', release)
gulp.task('watch', function () {
	gulp.watch('./src/**/*.js', ['dev'])
	gulp.watch('./src/**/*.vue', ['dev'])
})

