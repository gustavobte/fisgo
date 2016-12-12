(function () {
  'use strict';

  angular
    .module('fisgo')
    .config(Config);

  function Config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: '/modules/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
          }
        }
      })
  }
});