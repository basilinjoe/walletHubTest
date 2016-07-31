define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc directive
   * @name walletHubApp.directive:formatter.phone
   * @description
   * # formatter.phone
   */
  angular.module('walletHubApp.directives.FormatterPhone', [])
    .directive('formatter.phone', function () {
      return {
        template: '<div></div>',
        restrict: 'E',
        link: function postLink(scope, element, attrs) {
          element.text('this is the formatter.phone directive');
        }
      };
    });
});
