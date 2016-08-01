define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name walletHubApp.controller:SumUpCtrl
   * @description
   * # SumUpCtrl
   * Controller of the walletHubApp
   */
  angular.module('walletHubApp.controllers.SumUpCtrl', [])
    .controller('SumUpCtrl', function () {
      var ctrl = this;

    ctrl.sumUp = sumUp;
    ctrl.spreadValues = spreadValues;

    ctrl.params = {};
    ctrl.params.first = 100;
    ctrl.params.second = 100;
    ctrl.params.third = 100;

    ctrl.ratio = {};
    ctrl.ratio.first = 1;
    ctrl.ratio.second = 1;
    ctrl.ratio.third = 1;

    ctrl.sum = sumUp();

    function init() {
        sumUp();
    }

    function sumUp() {
        ctrl.sum = ctrl.params.first + ctrl.params.second + ctrl.params.third;
        setRatio();
        return ctrl.sum;
    }
    function setRatio(){
        if(ctrl.sum>0){
            ctrl.ratio.first = ctrl.params.first/ctrl.sum;
            ctrl.ratio.second = ctrl.params.second/ctrl.sum;
            ctrl.ratio.third = ctrl.params.third/ctrl.sum;
        }
    }

    function spreadValues(){
        ctrl.params.first = ctrl.ratio.first * ctrl.sum;
        ctrl.params.second = ctrl.ratio.second * ctrl.sum;
        ctrl.params.third = ctrl.ratio.third * ctrl.sum;
    }

    });
});
