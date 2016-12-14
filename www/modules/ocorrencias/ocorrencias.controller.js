(function () {
    'use strict';

    angular
        .module('fisgo')
        .controller('OcorrenciasController', OcorrenciasController);

    OcorrenciasController.$inject = ['OcorrenciasService'];
    function OcorrenciasController(OcorrenciasService) {
        var vm = this;

        vm.numDocumento = '';

        vm.listaNFES = [];
        vm.listaOcorrenciasCNPJ = [];
        vm.listaOcorrenciasPlaca = [];

        vm.listaNFES = function () {
            OcorrenciasService.buscaNFES(vm.numDocumento).then(function (result) {
                vm.listaNFES = result;
            }, function (response) {
                console.log("error: " + response);
            });
        };

        vm.buscaOcorrenciasCNPJ = function () {
            OcorrenciasService.buscaOcorrenciasCNPJ(vm.numDocumento).then(function (result) {
                vm.listaOcorrenciasCNPJ = result;
            }, function (response) {
                console.log("error: " + response);
            });
        };

        vm.buscaOcorrenciasPlaca = function () {
            OcorrenciasService.buscaOcorrenciasPlaca(vm.numDocumento).then(function (result) {
                vm.listaOcorrenciasPlaca = result;
            }, function (response) {
                console.log("error: " + response);
            });
        };
    }
})();