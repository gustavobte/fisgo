(function () {
  'use strict';

  angular
    .module('fisgo')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$location', '$scope', "$ionicModal", "$ionicPopover", "$timeout"];

  function HomeController($location, $scope,$ionicModal, $ionicPopover, $timeout) {
    var vm = this;

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year

    });

  }
})();



