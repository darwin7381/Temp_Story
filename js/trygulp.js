// 載入 gulp
var gulp = require('gulp');
	gulpUglify = require('gulp-uglify');
	gulpSass = require('gulp-sass');
	gulpCompass = require('gulp-compass');
	gulpImagemin = require('gulp-imagemin');

// 監看
gulp.task('watch', function () {
    gulp.watch('**',['scripts', 'styles', 'image']);
});

// 預設進行工作 scripts > styles 接著就一直監看
gulp.task('default',['scripts', 'styles', 'image', 'watch']);

// 使用 "gulp-uglify" 最小化 CSS
gulp.task('styles', function () {
    // gulp.src('*.scss')
    gulp.src('*.css')
    	.pipe(gulpSass({
    		outputStyle: 'compressed'
    	}))

    	.pipe(gulp.dest('public'))
// Compass
// gulp.src('resources/assets/sass/**/*.sass') // sass 來源路徑
//         .pipe(gulpCompass({
//             css: 'public/assets/css',           // compass 輸出位置
//             sass: 'resources/assets/sass',      // sass 來源路徑
//             image: 'resources/assets/images',   // 圖片來源路徑
//             style: 'compressed',                // CSS 處理方式，預設 nested（expanded, nested, compact, compressed）
//             comments: false,                    // 是否要註解，預設(true)
//             require: ['susy'],                  // 額外套件 susy
//         }));
//         // .pipe(gulp.dest('app/assets/temp')); // 輸出位置(非必要)
});

// 使用 "gulp-uglify" 最小化 JavaScript
gulp.task('scripts', function () {
    gulp.src('*.js')
    	.pipe(gulpUglify())
    	.pipe(gulp.dest('public'))
});

// 傳送圖片
gulp.task('image', function() {
	gulp.src('assets/**')
		.pipe(gulp.dest('public/assets'));
})

// // 壓縮，最佳化images
// gulp.task('image', function() {
//     gulp.src('assets/**')
//         .phttps://kejyuntw.gitbooks.io/gulp-learning-notes/content/plguins/Tool/Plugins-Tool-gulp-plumber.htmlipe(gulpImagemin())
//         .pipe(gulp.dest('public/assets'));
// })


// 來源：https://kejyuntw.gitbooks.io/gulp-learning-notes/content/plguins/Tool/Plugins-Tool-gulp-plumber.html
