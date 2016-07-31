/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: formatter.currency', function () {

    // load the directive's module
    beforeEach(module('walletHubApp.directives.FormatterCurrency'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<formatter.currency></formatter.currency>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this is the formatter.currency directive');
    }));
  });
});
