module.exports = {
    options: {
        title: 'Angular Core Grid functionalities',
        styles: ['dist/core-grid.min.css'],
        scripts: ['bower_components/angular/angular.min.js', 'bower_components/angular-animate/angular-animate.min.js', 'dist/core-grid.min.js'],
        dest: 'docs'
    },
    all: {
        src: ['src/**/*.js', '!src/**/*.spec.js', 'resources/index.ngdoc']
    }
};