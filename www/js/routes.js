angular
    .module('fisgo')
    .config(Config);

function Config($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.views.maxCache(0);

    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'modules/menu/menu.html',
            controller: 'AppController',
            controllerAs: 'vm'
        })

        .state('login', {
            url: '/login',
            templateUrl: 'modules/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        })

        .state('home', {
            url: '/home',
            templateUrl: 'modules/home/home.html',
            controller: 'HomeController',
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
