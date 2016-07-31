/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'directives/sample', 'directives/formatter.phone', 'directives/formatter.currency']/*deps*/, function (angular, MainCtrl, AboutCtrl, SampleDirective, FormatterPhoneDirective, FormatterCurrencyDirective)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name walletHubApp
   * @description
   * # walletHubApp
   *
   * Main module of the application.
   */
  return angular
    .module('walletHubApp', ['walletHubApp.controllers.MainCtrl',
'walletHubApp.controllers.AboutCtrl',
'walletHubApp.directives.FormatterPhone',
'walletHubApp.directives.FormatterCurrency',
/*angJSDeps*/ngCookies,ngAria,ngMessages,ngResource,ngSanitize,ngRoute,ngAnimate,ngTouch])
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
        .state('home', {
          url:'/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'ctrl'
        })
        .state('/about', {
          url:'/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'ctrl'
        });
    });
});
