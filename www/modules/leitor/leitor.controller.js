(function () {
    'use strict';

    angular
        .module('fisgo')
        .controller('LeitorController', LeitorController);

    LeitorController.$inject = ['LeitorService'];

    function LeitorController(LeitorService) {
        var vm = this;

        vm.leitorBarcode = function () {
            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    vm.resultadoLeitor = result.text;
                },
                function (error) {
                    console("Scanning failed: " + error);
                },
                {
                    "preferFrontCamera": true,
                    "showFlipCameraButton": true,
                    "showTorchButton": true,
                    "prompt": "Por favor, centralize o código de barras",
                    "formats": "QR_CODE,PDF_417"
                }
            );
        };

        vm.salvar = function () {
            LeitorService.addItem(vm.resultadoLeitor);
            vm.resultadoLeitor = '';
        };
    }
})();



