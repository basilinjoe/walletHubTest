/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: ResultCtrl', function () {

    // load the controller's module
    beforeEach(module('walletHubApp.controllers.ResultCtrl'));

    var ResultCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ResultCtrl = $controller('ResultCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(ResultCtrl.awesomeThings.length).toBe(3);
    });
  });
});
