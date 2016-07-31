define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc directive
   * @name walletHubApp.directive:formatter.currency
   * @description
   * # formatter.currency
   */
  angular.module('walletHubApp.directives.FormatterCurrency', [])
    .directive('formatter.currency', function () {
      return {
        template: '<div></div>',
        restrict: 'E',
        link: function postLink(scope, element, attrs) {
          element.text('this is the formatter.currency directive');
        }
      };
    });
});
