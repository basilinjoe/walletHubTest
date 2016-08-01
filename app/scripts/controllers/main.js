define(['angular'], function(angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name walletHubApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the walletHubApp
   */
  angular.module('walletHubApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function($state) {
      var ctrl = this;
      ctrl.submit = submit;
      ctrl.name = 'Steve';

      function submit() {
        $state.go('problem.result', {
          id:'q2',
          data: ctrl.name
        });
      }
    });
});
