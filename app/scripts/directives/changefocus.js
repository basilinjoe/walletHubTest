define(['angular'], function(angular) {
  'use strict';

  /**
   * @ngdoc directive
   * @name walletHubApp.directive:changeFocus
   * @description
   * # changeFocus
   */
  angular.module('walletHubApp.directives.ChangeFocus', [])
    .directive('changeFocus', function() {
      var changeFocusDirective = {
        restrict: 'A',
        link: postLink,
        require: 'ngModel'
      };
      return changeFocusDirective;

      function postLink(scope, elem, attrs, modelCtrl) {

        modelCtrl.$viewChangeListeners.push(function() {
          if (elem.val().length == attrs.maxlength) {
            if (attrs.to) {
              document.getElementById(attrs.to).focus();
            }
          }
          if (elem.val().length === 0) {
            if (attrs.from) {
              document.getElementById(attrs.from).focus();
            }
          }
        });
      }
    });
});
