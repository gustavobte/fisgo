angular
    .module('fisgo')
    .config(config);

function config($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
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

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
}