'use strict';

describe('Controller: AdminManageCtrl', function() {

    // load the controller's module
    beforeEach(module('payPcApp'));

    var AdminManageCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, adminmodel) {
        scope = $rootScope.$new();
        AdminManageCtrl = $controller('AdminManageCtrl', {
            $scope: scope
                // place here mocked dependencies
        });

    }));

    it('should attach a list of awesomeThings to the scope', function() {
        expect(scope.admin_list.length).toBe(10);
    });
});