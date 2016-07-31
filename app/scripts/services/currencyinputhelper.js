define(['angular'], function(angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name walletHubApp.currencyInputHelper
   * @description
   * # CurrencyInputHelper
   * Service in the walletHubApp.
   */
  angular.module('walletHubApp.services.helper.currency', [])
    .service('currencyInputHelper', currencyInputHelper);

  function currencyInputHelper($locale, $filter) {

    var decimalSep = $locale.NUMBER_FORMATS.DECIMAL_SEP;
    var toNumberRegex = new RegExp('[^0-9\\' + decimalSep + ']', 'g');
    var trailingZerosRegex = new RegExp('\\' + decimalSep + '0+$');

    return {
      filterFunc: filterFunc,
      toNumber: toNumber
    };

    function filterFunc(value) {
      var result = null;
      if (value > 0) {
        result = '$' + String(value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      }
      return result;
    };

    function toNumber(currencyStr) {
      var result = parseFloat(currencyStr.replace(toNumberRegex, '') || 0, 10);
      return result;
    }

  }
});
