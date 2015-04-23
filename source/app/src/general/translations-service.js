define(['angular'], function(angular) {
    'use strict';

    angular.module('translationsServices', [])
    .service('translations', ['$http', '$rootScope', '$q', function($http, $rootScope, $q) {

        var availableLang = ["en","es"],
            languages = {};

        for(var i = 0; i < availableLang.length; i++){
            languages[i] =  $http.get("/src/general/general-"+availableLang[i]+".json");
        }

        $rootScope.translation = {};

        $q.all(languages).then(function(result) {
            var tmp = {};
            angular.forEach(result, function(response) {
                tmp[response.data.lang] = response.data;
            });
            return tmp;
        }).then(function(tmpResult) {
            $rootScope.translation = tmpResult;
        });

        return {
            getLang: function(lang, section) {
                var translationFile = '/src/'+section+'/'+section+'-'+lang+'.json';

                return $http.get(translationFile);
            },
            getAvailableLanguages: function(){
                return availableLang;
            }
        };
    }]);
});

