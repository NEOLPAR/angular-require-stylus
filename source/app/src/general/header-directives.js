define(['angular'], function(angular) {
    'use strict';

    angular.module('headerDirectives', [])
/*
        .directive('title', ['translations', '$rootScope', function(translations){
            return {
                restrict: 'E',
                templateUrl: "/src/general/header-directive.tpl.html",
                scope: {name: '='},
                link: function(scope) {
                    scope.$watch('name', function(newVal) {
                        scope.title = newVal;
                    }, true);
                }
            }
        }])
*/
        .directive('hreflangDirective', ['$location', 'translations', function($location, translations){
            return {
                restrict: 'C',
                templateUrl: "/src/general/header-hreflang.tpl.html",
                scope: {refreshWhen: '='},
                replace: true,
                link: function(scope) {
                    scope.$watch("refreshWhen", function(){
                        var availableLanguages = translations.getAvailableLanguages();
                        scope.hrefLanguages = new Array();

                        for(var i = 0; i < availableLanguages.length; i++ ){
                            var lang = {};

                            lang.language = availableLanguages[i];
                            lang.url = $location.absUrl().replace(/\/(en|es)\//,"/"+availableLanguages[i]+"/").replace(/(http)/,"https");

                            scope.hrefLanguages.push(lang);
                        }
                    });
                }
            }
        }]);
});
