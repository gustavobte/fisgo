(function () {
    'use strict';

    angular
        .module('fisgo')
        .controller('LeitorController', LeitorController);

    LeitorController.$inject = ['LeitorService'];

    function LeitorController(LeitorService) {
        var vm = this;

        vm.init = function(){
            vm.resultadoLeitor = {"tipo":"","status": "alerta", "dados":""};
        }

        vm.defineTipo = function(valor){
            var Rplaca = /[A-Za-z]{3}-?\d{4}/;
            var Rnfe = /\d{44}/

            if(Rnfe.test(valor)){
                return 'NF-e';
            }else if(Rplaca.test(valor)){
                return 'Veiculo';
            }else{
                return 'desconhecido';
            }
        }

        vm.leitorBarcode = function () {
            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    vm.resultadoLeitor.dados = result.text;
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
            vm.resultadoLeitor.tipo = vm.defineTipo(vm.resultadoLeitor.dados);
            LeitorService.addItem(vm.resultadoLeitor);
            vm.init();
        };

        vm.init();
    }
})();



