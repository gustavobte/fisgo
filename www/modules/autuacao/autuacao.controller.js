(function () {
  'use strict';

  angular
    .module('fisgo')
    .controller('AutuacaoController', AutuacaoController);

  AutuacaoController.$inject = ['$location', 'LeitorService'];

  function AutuacaoController($location, LeitorService) {
    var vm = this;

    vm.newItem = function () {
      $location.path('/app/leitor');
    };

    vm.getItems = function(){
      vm.items = LeitorService.getItems();
    }

    vm.telaLeitor = function () {
      $location.path('/app/leitor');
    };

    vm.getItems();
  }
})();



