(function () {
  'use strict';

  angular
    .module('fisgo')
    .controller('AutuacaoController', AutuacaoController);

  AutuacaoController.$inject = ['$location'];

  function AutuacaoController($location) {
    var vm = this;

    vm.telaLeitor = function () {
      $location.path('/app/leitor');
    };

  }
})();



