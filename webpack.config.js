var SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
	plugins: [
        new SpritesmithPlugin({
            src: {
                cwd: 'src/sprite-images',
                glob: '*.png'
            },
            target: {
                image: 'public/images/sprite.png',
                css: 'public/styles/sprite.css'
            },
            apiOptions: {
                cssImageRef: "../images/sprite.png"
            }
        })
    ]
}