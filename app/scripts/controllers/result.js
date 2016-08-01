define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name walletHubApp.controller:ResultCtrl
   * @description
   * # ResultCtrl
   * Controller of the walletHubApp
   */
  angular.module('walletHubApp.controllers.ResultCtrl', [])
    .controller('ResultCtrl', function ($stateParams) {
      this.data = $stateParams.data;
    });
});
