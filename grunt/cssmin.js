module.exports = {
    build: {
        options: {
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: "dist/",
            src: ['*.css', '!*.min.css'],
            dest: "dist/",
            ext: '.min.css'
        }]
    }
};