/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: SumUpCtrl', function () {

    // load the controller's module
    beforeEach(module('walletHubApp.controllers.SumUpCtrl'));

    var SumUpCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      SumUpCtrl = $controller('SumUpCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(SumUpCtrl.awesomeThings.length).toBe(3);
    });
  });
});
