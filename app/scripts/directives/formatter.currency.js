define(['angular'], function(angular) {
  'use strict';

  /**
   * @ngdoc directive
   * @name walletHubApp.directive:formatter.currency
   * @description
   * # formatter.currency
   */
  angular.module('walletHubApp.directives.formatter.currency', [])
    .directive('currencyInput', currencyInput);

  function currencyInput(currencyInputHelper) {
    var currencyDirective = {
      restrict: 'A',
      require: 'ngModel',
      link: postLink
    };
    return currencyDirective;

    function postLink(scope, elem, attrs, modelCtrl) {
      modelCtrl.$formatters.push(currencyInputHelper.filterFunc);
      modelCtrl.$parsers.push(function(newViewValue) {
        var newModelValue = currencyInputHelper.toNumber(newViewValue);
        modelCtrl.$viewValue = currencyInputHelper.filterFunc(newModelValue);
        elem.val(modelCtrl.$viewValue);
        return newModelValue;
      });
    }
  }
});
