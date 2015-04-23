define(['angular-mocks', 'services/services'], function() {
    'use strict';

    describe('controller title', function() {
        var $scope;
        var $location;
        var servicesController;
        beforeEach(module('servicesModule'));
        beforeEach(inject(function(_$injector_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $location = _$injector_.get('$location');
            var $controller = _$injector_.get('$controller');
            servicesController = $controller('ServicesController', {
                '$scope': $scope,
                '$location': $location
            });
        }));

        it('should be equal services', function() {
            expect($scope.pageTitle).toEqual('services');
        });
    });
});
