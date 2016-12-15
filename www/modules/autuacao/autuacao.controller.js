(function () {
  'use strict';

  angular
    .module('fisgo')
    .controller('AutuacaoController', AutuacaoController);

  AutuacaoController.$inject = ['$location', 'LeitorService', 'OcorrenciasService', '$ionicModal', '$scope'];

  function AutuacaoController($location, LeitorService, OcorrenciasService, $ionicModal, $scope) {
    var vm = this;

    vm.showDelete = false;

    vm.onShowDeleteIcons = function () {
      vm.showDelete = !vm.showDelete;
    };

    vm.telaLeitor = function () {
      $location.path('/app/leitor');
    }

    vm.getItems = function () {
      vm.items = LeitorService.getItems();
    }

    vm.filtraOcorrenciaPlacas = function (placa, allPlacas) {
      for (var i = 0; i < allPlacas.length; i++) {
        if (allPlacas[i].placa == placa) {
          return allPlacas[i];
        }
      }
    }

    vm.filtraNfe = function (nfe, allNfes) {
      for (var i = 0; i < allNfes.length; i++) {
        if (allNfes[i].NFe.infNFe["-Id"].replace('NFe', '') == nfe) {
          return allNfes[i];
        }
      }
    }

    vm.filtraOcorrenciaNfe = function (nfe, allNfes) {
      for (var i = 0; i < allNfes.length; i++) {
        var cnpj = allNfes[i].cnpj.replace(/\./g, '').replace(/\//g, '').replace(/\-/g, '');
        if (cnpj == nfe) {
          return allNfes[i];
        }
      }
    }

    vm.buscaOcorrenciasPlaca = function (item) {
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

    vm.buscaOcorrenciasNfe = function (item) {
      OcorrenciasService.buscaNFES(item.dados).then(function (result) {
        var nfe = vm.filtraNfe(item.dados, result.data);
        var cnpj = nfe.NFe.infNFe.emit.CNPJ;
        OcorrenciasService.buscaOcorrenciasCNPJ(cnpj).then(function (result) {
          var ocorrencia = vm.filtraOcorrenciaNfe(cnpj, result.data);
          item.ocorrencia = ocorrencia;
          vm.items[item] = item;
          var statusOcorrencia = angular.equals(vm.items[item].ocorrencia, undefined) ? 'ok' : 'error';
          item.status = statusOcorrencia;
          vm.items[item] = item;
        }, function (response) {
          console.log("error: " + response);
        });
      }, function (response) {
        console.log("error: " + response);
      });
    }

    vm.verificar = function () {
      for (var i = 0; i < vm.items.length; i++) {
        if (vm.items[i].tipo == 'Veiculo') {
          vm.buscaOcorrenciasPlaca(vm.items[i])
        } else if (vm.items[i].tipo == 'NF-e') {
          vm.buscaOcorrenciasNfe(vm.items[i])
        }
      }
    }

    vm.calculaTotalDivida = function (pendencias) {
      var divida = 0;
      for (var i = 0; i < pendencias.length; i++) {
        var pendencia = pendencias[i];
        divida += pendencia.valor;
      }
      return divida;
    }

    vm.showModal = function (item) {
      vm.detalhesItem = item;
      vm.totalDivida = vm.calculaTotalDivida(item.ocorrencia.pendencias)
      $scope.modal.show();
    }

    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    vm.data = {
      showDelete: false
    };

    vm.ItemDelete = function (item) {
      vm.items.splice(vm.items.indexOf(item), 1);
    };

    vm.getItems();
  }
})();