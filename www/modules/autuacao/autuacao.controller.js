(function () {
  'use strict';

  angular
    .module('fisgo')
    .controller('AutuacaoController', AutuacaoController);

  AutuacaoController.$inject = ['$location', 'LeitorService', 'PendenciasService'];

  function AutuacaoController($location, LeitorService, PendenciasService) {
    var vm = this;

    vm.telaLeitor = function () {
      $location.path('/app/leitor');
    }

    vm.getItems = function () {
      vm.items = LeitorService.getItems();
    }

    vm.filtraPendenciasPlacasByResultadoLeitor = function (placa, allPlacas) {
      // Por enquanto o filtro por numDocumento é feito na seguinte função até implementar conexão com servidor
      var pendencias = [];
      for (var i = 0; i < allPlacas.length; i++) {
        if (allPlacas[i].placa == placa) {
          // Ver que vai precisar retornar neste ponto
          pendencias.push(allPlacas[i]);
        }
      }
      return pendencias;
    }

    vm.buscaPendenciasPlaca = function (item) {
      // Verificar se o documento é NF-e ou Placa para buscar no banco certo
      PendenciasService.buscaPendenciasPlaca(item.data).then(function (result) {
        var allPlacas = result.data;
        var pendencias = vm.filtraPendenciasPlacasByResultadoLeitor(item.data, allPlacas);
        vm.items[item] = item.pendencias = pendencias;
      }, function (response) {
        console.log("error: " + response);
      });
    }

    vm.verificar = function () {
      for (var i = 0; i < vm.items.length; i++) {
        if (vm.items[i].tipo == 'Veiculo') {
          vm.buscaPendenciasPlaca(vm.items[i])
          console.log(vm.items[i])
        } else if (vm.items[i].tipo == 'NF-e') {
          console.log("Implementando...")
        }
      }
    }

    vm.getItems();
  }
})();



