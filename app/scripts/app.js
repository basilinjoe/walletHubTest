
/*jshint unused: vars */
define([
  'angular',
  'controllers/main',
  'controllers/about',
  'directives/formatter.phone',
  'directives/formatter.currency',
  'services/phoneinputhelper',
  'services/currencyinputhelper',
  'controllers/problem',
  'controllers/result',
  'controllers/sort',
  'controllers/sumup',
  'directives/changefocus'
] /*deps*/ ,
  function(
    angular,
    MainCtrl,
    AboutCtrl,
    FormatterPhoneDirective,
    FormatterCurrencyDirective,
    PhoneInputHelperService,
    CurrencyInputHelperService,
    ProblemCtrl,
    ResultCtrl,
    SortCtrl,
    SumUpCtrl,
    ChangeFocusDirective
  )
 /*invoke*/
 {
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
    .module('walletHubApp', [
      'walletHubApp.controllers.MainCtrl',
      'walletHubApp.controllers.AboutCtrl',
      'walletHubApp.directives.formatter.phone',
      'walletHubApp.directives.formatter.currency',
      'walletHubApp.services.helper.phone',
      'walletHubApp.services.helper.currency',
      'walletHubApp.controllers.ProblemCtrl',
      'walletHubApp.controllers.ResultCtrl',
'walletHubApp.controllers.SortCtrl',
'walletHubApp.controllers.SumUpCtrl',
'walletHubApp.directives.ChangeFocus',
/*angJSDeps*/
      'ngCookies',
      'ui.router',
      'ngAnimate',

    ])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'ctrl'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'ctrl'
        })
        .state('problem',{
          url:'/problem/:id',
          templateUrl:function($stateParams){
            return 'views/problem/'+$stateParams.id+'.html';
          }
        })
        .state('problem.result',{
          url:'/:data',
          controller:'ResultCtrl',
          controllerAs:'ctrl',
          templateUrl:function($stateParams){
            return 'views/problem/'+$stateParams.id+'.result.html';
          }
        });
    });
});
