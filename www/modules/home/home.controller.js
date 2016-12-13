(function () {
  'use strict';

  angular
    .module('fisgo')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$location', '$scope', "$ionicModal", "$ionicPopover", "$timeout", "PendenciasService"];

  function HomeController($location, $scope, $ionicModal, $ionicPopover, $timeout, PendenciasService) {
    var vm = this;

    vm.listaAtuacoes = [];

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year

    });

    vm.buscaAtuacoes = function () {
      PendenciasService.buscaAtuacoes(vm.cpfFiscal).then(function (result) {
        vm.listaAtuacoes = result.data;
      }, function (response) {
        console.log("error: " + response);
      });
    };

    vm.buscaAtuacoes();

    vm.newAtuacao = function () {
      $location.path('/app/autuacao');
    };

  }
})();



