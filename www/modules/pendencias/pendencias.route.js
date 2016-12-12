(function () {
    'use strict';

    angular
        .module('fisgo')
        .config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider'];

    function RouteConfig($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.views.maxCache(0);

        $stateProvider.state('pendencias', {
            url: '/pendencias',
            templateUrl: 'modules/pendencias/pendencias.html',
            controller: 'PendenciasController',
            controllerAs: 'vm'
        })

        $urlRouterProvider.otherwise('/app/login');
    }

})();