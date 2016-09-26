module.exports = {
    options: {
        sourceMapIncludeSources: true,
        sourceMap: true
    },
    build: {
        expand: true,
        cwd: 'dist',
        src: ['**/*.js', '!**/*.min.js'],
        dest: 'dist',
        ext: '.min.js'
    }
};