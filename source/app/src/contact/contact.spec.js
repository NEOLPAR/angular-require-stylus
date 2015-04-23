define(['angular-mocks', 'contact/contact'], function() {
    'use strict';
    describe('controller title', function() {
        var $scope;
        var $location;
        var contactController;
        beforeEach(module('contactModule'));
        beforeEach(inject(function(_$injector_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $location = _$injector_.get('$location');
            var $controller = _$injector_.get('$controller');
            contactController = $controller('ContactController', {
                '$scope': $scope,
                '$location': $location
            });
        }));

        it('should be equal contact', function() {
            expect($scope.pageTitle).toEqual('contact');
        });
    });
});
