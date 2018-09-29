var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function() {
    // var DEST_NAME = args[1];
    var spriteData = gulp.src('src/sprite-images/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
      	cssName: 'sprite.css',
      	imgPath: '../images/sprite.png',
      	// cssTemplate: 'sprite.template.handlebars'
    }));
    spriteData.css.pipe(gulp.dest('public/styles'));
    spriteData.img.pipe(gulp.dest('public/images'));
});