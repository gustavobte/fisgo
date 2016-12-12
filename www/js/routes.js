angular
    .module('fisgo')
    .config(Config);

function Config($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.views.maxCache(0);

    $stateProvider
        .state('app', {
            url: '/login',
            templateUrl: 'modules/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        })

    $urlRouterProvider.otherwise('/login');
}
