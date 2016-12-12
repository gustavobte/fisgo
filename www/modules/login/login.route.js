

angular
  .module('fisgo')
  .config(config);

function config($stateProvider, $urlRouterProvider) {

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

