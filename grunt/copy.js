module.exports = {
    build: {
        files: [{
            expand: true,
            cwd: "src/assets/",
            src: "**/*.css",
            dest: "dist/"
        }]
    }
};