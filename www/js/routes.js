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

        .state('leitor', {
            url: '/leitor',
            templateUrl: 'modules/leitor/leitor.html',
            controller: 'LeitorController',
            controllerAs: 'vm'
        })

    $urlRouterProvider.otherwise('/login');
}
