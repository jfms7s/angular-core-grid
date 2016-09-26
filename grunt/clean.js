module.exports = {
    build: {
        files: [{
            dot: true,
            src: ['dist/{,*/}*', '!dist/.git*']
        }]
    }
};