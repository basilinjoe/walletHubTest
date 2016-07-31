/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: CurrencyInputHelper', function () {

    // load the service's module
    beforeEach(module('walletHubApp.services.CurrencyInputHelper'));

    // instantiate service
    var CurrencyInputHelper;
    beforeEach(inject(function (_CurrencyInputHelper_) {
      CurrencyInputHelper = _CurrencyInputHelper_;
    }));

    it('should do something', function () {
      expect(!!CurrencyInputHelper).toBe(true);
    });

  });
});
