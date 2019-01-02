const gulp = require('gulp');
const mocha = require('gulp-mocha');

let compile = gulp.parallel(function () {
    return gulp.src('test/*.spec.ts')
        .pipe(mocha({
            reporter: 'nyan',
            require: ['ts-node/register']
        }))
});

compile.description = 'compile all sources';

gulp.task("default", compile);

module.exports = compile;
