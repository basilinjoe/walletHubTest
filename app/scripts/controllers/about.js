define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name walletHubApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the walletHubApp
   */
  angular.module('walletHubApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($stateParams) {
      var ctrl = this;
      ctrl.qid = $stateParams.id || 1;
    });
});
