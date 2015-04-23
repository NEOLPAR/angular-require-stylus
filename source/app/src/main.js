require([
    'angular',
    'jquery',
    'angular-resource',
    'angular-ui-router',
    'angular-animate',
    'angular-messages',
    'angular-touch',
    'home/index',
    'services/index',
    'contact/index',
    'general/translations-service',
    'general/header-directives',
], function(angular) {
    'use strict';
    /*
         SEO
         title   55 chars
         description 115 chars
         keywords    4-8
         http://www.typetools.co.uk/google-tool
     */
    /*App Module*/
    angular.element(document).ready(function () {
        /*smart works go here*/
        var $html = angular.element('html');
        angular.module('webApp', [
            'ui.router',
            'ngResource',
            'homeModule',
            'servicesModule',
            'contactModule',
            'translationsServices',
            'headerDirectives',
        ]).config(['$urlRouterProvider', '$provide', '$locationProvider', function($urlRouterProvider, $provide, $locationProvider) {
            $urlRouterProvider.otherwise('/es/');
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            /* change configure to use [[ to be the interpolation ([[2 + 2]]) */
            //$interpolateProvider.startSymbol('[[');
            //$interpolateProvider.endSymbol(']]');

            /* add safeApply function for $rootScope - called by $scope.$root.safeApply(fn) */
            $provide.decorator('$rootScope', [
                '$delegate',
                function($delegate) {
                    $delegate.safeApply = function(fn) {
                        var phase = $delegate.$$phase;
                        if (phase === '$apply' || phase === '$digest') {
                            if (fn && typeof fn === 'function') {
                                fn();
                            }
                        } else {
                            $delegate.$apply(fn);
                        }
                    };
                    return $delegate;
                }
            ]);
        }]);

        /*bootstrap model*/
        angular.bootstrap($html, ['webApp']);
    });
});
