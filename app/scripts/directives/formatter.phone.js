define(['angular'], function(angular) {
  'use strict';

  /**
   * @ngdoc directive
   * @name walletHubApp.directive:formatter.phone
   * @description
   * # formatter.phone
   */
  angular.module('walletHubApp.directives.formatter.phone', [])
    .directive('phoneInput', phoneInput);

  function phoneInput(phoneInputHelper) {
    var phoneInputDirective = {
      restrict: 'A',
      require: 'ngModel',
      link: postLink
    };

    return phoneInputDirective;

    function postLink(scope, elem, attrs, modelCtrl) {
      modelCtrl.$formatters.push(phoneInputHelper.toPhoneNumber);
      modelCtrl.$parsers.push(function(val) {
        var num = phoneInputHelper.toNumber(val);
        modelCtrl.$viewValue = phoneInputHelper.toPhoneNumber(num);
        elem.val(modelCtrl.$viewValue);
        return num;
      });
    }
  }
});
