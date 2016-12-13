angular
    .module('fisgo')
    .config(Config);

function Config($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.views.maxCache(0);

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'modules/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        })

        .state('pendencias', {
            url: '/pendencias',
            templateUrl: 'modules/pendencias/pendencias.html',
            controller: 'PendenciasController',
            controllerAs: 'vm'
        })

    $urlRouterProvider.otherwise('/login');
}
