define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name walletHubApp.controller:ProblemCtrl
   * @description
   * # ProblemCtrl
   * Controller of the walletHubApp
   */
  angular.module('walletHubApp.controllers.ProblemCtrl', [])
    .controller('ProblemCtrl', function ($stateParams) {
      var ctrl = this;
      ctrl.problemId = $stateParams.id;
    });
});
