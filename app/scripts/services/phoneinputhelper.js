define(['angular'], function(angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name walletHubApp.PhoneInputHelper
   * @description
   * # PhoneInputHelper
   * Service in the walletHubApp.
   */
  angular.module('walletHubApp.services.helper.phone', [])
    .service('phoneInputHelper', phoneInputHelper);

  function phoneInputHelper() {
    var phoneInputFactory = {
      toNumber: toNumber,
      toPhoneNumber: toPhoneNumber
    };

    return phoneInputFactory;

    function toNumber(ph) {
      if(ph){
        return ph.replace(/[^\d]/g, '').slice(0, 10);
      }
      else {
        return null;
      }
    }

    function toPhoneNumber(num) {
      if(num){
        var numString = String(num).slice(0, 10);
        var result = null;
        if (numString.length === 10) {
          return numString.replace(/(\d{3})(\d{3})(\d{4})/gi, "($1) $2-$3");
        } else if (numString.length >= 3) {
          var v1 = numString.slice(0, 3);
          var v2 = numString.slice(3, 6);
          var v3 = numString.slice(6, 10);
          var p1 = v1.length >= 3 ? '(' + v1 + ') ' : v1;
          var p2 = v2.length >= 3 ? v2 + '-' : v2;
          var p3 = v3;
          return [p1, p2, p3].join('');
        } else {
          return numString;
        }
      }
      return null;
    }
  }
});
