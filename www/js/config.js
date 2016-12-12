angular
    .module('fisgo')
    .config(config);

function config($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.views.maxCache(0);

    $stateProvider.state('app', {
      url: '/app',
      templateUrl: 'modules/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    })

    $urlRouterProvider.otherwise('/app/login');
}