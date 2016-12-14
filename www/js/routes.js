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

        .state('app.login', {
            url: '/login',
            views: {
                'menuContent': {
                    templateUrl: 'modules/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                }
            }
        })

        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'modules/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            }
        })

        .state('app.ocorrencias', {
            url: '/ocorrencias',
            views: {
                'menuContent': {
                    templateUrl: 'modules/ocorrencias/ocorrencias.html',
                    controller: 'OcorrenciasController',
                    controllerAs: 'vm'
                }
            }
        })

        .state('app.leitor', {
            url: '/leitor',
            views: {
                'menuContent': {
                    templateUrl: 'modules/leitor/leitor.html',
                    controller: 'LeitorController',
                    controllerAs: 'vm'
                }
            }
        })

      .state('app.autuacao', {
        url: '/autuacao',
        views: {
          'menuContent': {
            templateUrl: 'modules/autuacao/autuacao.html',
            controller: 'AutuacaoController',
            controllerAs: 'vm'
          }
        }
      })

    $urlRouterProvider.otherwise('/app/login');
}
