(function () {
    'use strict';

    angular
        .module('fisgo')
        .controller('LeitorController', LeitorController);

    LeitorController.$inject = ['LeitorService'];

    function LeitorController(LeitorService) {
        var vm = this;

        vm.resultadoLeitor = ''
        vm.error = 'sem erro';

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
                    "prompt": "Por favor, centralize o código de barras", // supported on Android only
                    "formats": "QR_CODE,PDF_417" // default: all but PDF_417 and RSS_EXPANDED
                }
            );
        };

        vm.salvar = function () {
            LeitorService.setResultadoLeitor(vm.resultadoLeitor)
        };

    }
})();



