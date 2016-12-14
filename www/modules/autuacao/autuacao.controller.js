(function () {
  'use strict';

  angular
    .module('fisgo')
    .controller('AutuacaoController', AutuacaoController);

  AutuacaoController.$inject = ['$location', 'LeitorService', 'OcorrenciasService'];

  function AutuacaoController($location, LeitorService, OcorrenciasService) {
    var vm = this;

    vm.telaLeitor = function () {
      $location.path('/app/leitor');
    }

    vm.getItems = function () {
      vm.items = LeitorService.getItems();
    }

    vm.filtraOcorrenciaPlacas = function (placa, allPlacas) {
      // Por enquanto o filtro por numDocumento é feito na seguinte função até implementar conexão com servidor
      for (var i = 0; i < allPlacas.length; i++) {
        if (allPlacas[i].placa == placa) {
          // Ver que vai precisar retornar neste ponto
          return allPlacas[i];
        }
      }
    }

    vm.buscaOcorrenciasPlaca = function (item) {
      // Verificar se o documento é NF-e ou Placa para buscar no banco certo
      OcorrenciasService.buscaOcorrenciasPlaca(item.dados).then(function (result) {
        var ocorrencia = vm.filtraOcorrenciaPlacas(item.dados, result.data);
        item.ocorrencia = ocorrencia;
        vm.items[item] = item;
        var statusOcorrencia = angular.equals(vm.items[item].ocorrencia, undefined) ? 'ok' : 'error';
        item.status = statusOcorrencia;
        vm.items[item] = item;
      }, function (response) {
        console.log("error: " + response);
      });
    }

    vm.verificar = function () {
      for (var i = 0; i < vm.items.length; i++) {
        if (vm.items[i].tipo == 'Veiculo') {
          vm.buscaOcorrenciasPlaca(vm.items[i])
          console.log(vm.items[i])
        } else if (vm.items[i].tipo == 'NF-e') {
          console.log("Implementando...")
        }
      }
    }

    vm.getItems();
  }
})();
