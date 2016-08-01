define(['angular'], function(angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name walletHubApp.controller:SortCtrl
   * @description
   * # SortCtrl
   * Controller of the walletHubApp
   */
  angular.module('walletHubApp.controllers.SortCtrl', [])
    .controller('SortCtrl', function() {
      var ctrl = this;

      ctrl.sort = sort;

      ctrl.persons = [];
      ctrl.search = {};
      ctrl.search.name = "";
      ctrl.search.age = "";
      ctrl.search.id = "";
      ctrl.sortBy = 'id';
      ctrl.order = false;

      init();

      function init() {
        ctrl.personsBak = genRawData(50);
        ctrl.persons = angular.copy(ctrl.personsBak);
      }

      function sort(by) {
        ctrl.order = ctrl.sortBy === by ? !ctrl.order : false;
        ctrl.sortBy = by;
      }

      function genRawData(limit) {
        var result = []
        for (var i = 1; i <= limit; i++) {
          result.push(randomObject(i))
        }
        return result;
      }

      function randomObject(index) {
        return {
          id: index,
          name: Math.random().toString(36).substring(7).slice(0, 10),
          age: String(parseInt(Math.random() * 100))
        }
      }
    });
});
