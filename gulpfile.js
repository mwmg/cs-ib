// gulpfile.js

const child = require('child_process');
const log = require('fancy-log');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const siteRoot = '_site';

gulp.task('jekyll', () => {
	const jekyll = child.spawn('jekyll', ['build',
		'--watch'
		]);
	const jekyllLogger = (buffer) => {
		buffer.toString()
			.split(/\n/)
			.forEach((message) => log('Jekyll: ' + message));
	};

	jekyll.stdout.on('data', jekyllLogger);
	jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
	browserSync.init({
		port: 4000,
		server: {
			baseDir: '_site/'
		}
	});
	gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('jekyll', 'serve'));
