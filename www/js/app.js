angular.module('fisgo', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    })


    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

      // Turn off caching for demo simplicity's sake
      $ionicConfigProvider.views.maxCache(0);

      /*
       // Turn off back button text
       $ionicConfigProvider.backButton.previousTitleText(false);
       */

      $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })


        })


      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/login');
    });

