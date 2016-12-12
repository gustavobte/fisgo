(function () {
    'use strict';

    angular
        .module('fisgo')
        .service('LeitorService', LeitorService);

    function LeitorService() {
        this.setResultadoLeitor = setResultadoLeitor;
        this.getResultadoLeitor = getResultadoLeitor;

        var vm = this;

        vm.resultadoLeitor = '';

        function setResultadoLeitor(resultadoLeitor) {
            vm.resultadoLeitor = resultadoLeitor;
        }

        function getResultadoLeitor() {
            return vm.resultadoLeitor;
        }
    }
})();