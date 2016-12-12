(function () {
    'use strict';

    angular
        .module('fisgo')
        .controller('LeitorController', LeitorController);

    LeitorController.$inject = ['LeitorService'];

    function LeitorController(LeitorService) {
        var vm = this;

        vm.resultadoLeitor = ''

        vm.leitorBarcode = function () {
            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    vm.resultadoLeitor = result;
                    console("We got a barcode\n" +
                        "Result: " + result.text + "\n" +
                        "Format: " + result.format + "\n" +
                        "Cancelled: " + result.cancelled);
                },
                function (error) {
                    console("Scanning failed: " + error);
                },
                {
                    "preferFrontCamera": true, // iOS and Android
                    "showFlipCameraButton": true, // iOS and Android
                    "showTorchButton": true, // iOS and Android
                    "disableAnimations": true, // iOS
                    "prompt": "Por favor, centralize o código de barras", // supported on Android only
                    "formats": "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                    "orientation": "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
                }
            );
        };

        vm.salvar = function () {
            LeitorService.setResultadoLeitor(vm.resultadoLeitor)
        };

    }
})();



