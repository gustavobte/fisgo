(function () {
    'use strict';

    angular
        .module('fisgo')
        .controller('PendenciasController', PendenciasController);

    PendenciasController.$inject = ['PendenciasService'];
    function PendenciasController(PendenciasService) {
        var vm = this;

        vm.numDocumento = '';

        vm.listaNFES = [];
        vm.listaPendenciasCNPJ = [];
        vm.listaPendenciasPlaca = [];

        vm.listaNFES = function () {
            PendenciasService.buscaNFES(vm.numDocumento).then(function (result) {
                vm.listaNFES = result;
            }, function (response) {
                console.log("error: " + response);
            });
        };

        vm.buscaPendenciasCNPJ = function () {
            PendenciasService.buscaPendenciasCNPJ(vm.numDocumento).then(function (result) {
                vm.listaPendenciasCNPJ = result;
            }, function (response) {
                console.log("error: " + response);
            });
        };

        vm.buscaPendenciasPlaca = function () {
            PendenciasService.buscaPendenciasPlaca(vm.numDocumento).then(function (result) {
                vm.listaPendenciasPlaca = result;
            }, function (response) {
                console.log("error: " + response);
            });
        };
    }
})();