/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: SortCtrl', function () {

    // load the controller's module
    beforeEach(module('walletHubApp.controllers.SortCtrl'));

    var SortCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      SortCtrl = $controller('SortCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(SortCtrl.awesomeThings.length).toBe(3);
    });
  });
});
