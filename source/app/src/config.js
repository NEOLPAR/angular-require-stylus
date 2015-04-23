requirejs.config({
    baseUrl: './src',
    paths: {
        'angular': '../bower_components/angular/angular',
        /*require angular mocks for testing*/
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
        /*require angular resource for easily handling sending and receiving request*/
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        /*require angular for better handling and binding controller*/
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        /*require jquery*/
        'jquery': '../bower_components/jquery/dist/jquery',
        'angular-animate': '../bower_components/angular-animate/angular-animate',
        'angular-messages': '../bower_components/angular-messages/angular-messages',
        'angular-touch': '../bower_components/angular-touch/angular-touch',
        /*--insert code tag--do not remove*/
    },
    shim: {
        'angular': { exports: 'angular', deps: ['jquery'] },
        'angular-mocks': ['angular'],
        'angular-resource': ['angular'],
        'angular-ui-router': ['angular'],
        'angular-animate': ['angular'],
        'angular-messages': ['angular'],
        'angular-touch': ['angular'],
    }/*--requirejs config copy tag--do not remove*/
});
