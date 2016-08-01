/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: changeFocus', function () {

    // load the directive's module
    beforeEach(module('walletHubApp.directives.ChangeFocus'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<change-focus></change-focus>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this is the changeFocus directive');
    }));
  });
});
