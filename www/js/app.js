(function () {
    'use strict';

    angular
        .module('fisgo', ['ionic', 'ionic-material', 'ionMdInput'])

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
        });

})();
