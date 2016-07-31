/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: PhoneInputHelper', function () {

    // load the service's module
    beforeEach(module('walletHubApp.services.PhoneInputHelper'));

    // instantiate service
    var PhoneInputHelper;
    beforeEach(inject(function (_PhoneInputHelper_) {
      PhoneInputHelper = _PhoneInputHelper_;
    }));

    it('should do something', function () {
      expect(!!PhoneInputHelper).toBe(true);
    });

  });
});
