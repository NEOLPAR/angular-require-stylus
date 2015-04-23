define(['angular', 'angular-ui-router'], function(angular) {
    'use strict';

    var name = "contact",
        urlModule = '/:lang/'+name,
        moduleName = name+'Module',
        templateFile = '/src/'+name+'/'+name+'.tpl.html',
        controllerName = name.charAt(0).toUpperCase() + name.slice(1) + "Controller";

    angular.module(moduleName, ['ui.router', 'ngAnimate']).config(['$stateProvider', function($stateProvider) {
        $stateProvider.state(name, {
            url: urlModule,
            templateUrl: templateFile,
            controller: controllerName,
            resolve: {
                header: ['translations', '$stateParams', '$rootScope', function(translations, $stateParams, $rootScope){
                    translations.getLang($stateParams.lang, name)
                        .success(function(result){
                            $rootScope.translation[$stateParams.lang][name] = {};
                            $rootScope.translation[$stateParams.lang][name] = result;
                            $rootScope.language = $stateParams.lang;
                            $rootScope.title = result.title;
                            $rootScope.description = result.description;
                            $rootScope.keywords = result.keywords;
                        });
                }]
            }
        });
    }]).controller(controllerName, [
        '$scope',
        '$location',
        '$rootScope',
        function($scope, $location, $rootScope) {
            //console.log($rootScope.translation);
        }
    ]);
});
