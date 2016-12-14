(function () {
    'use strict';

    angular
        .module('fisgo')
        .service('LeitorService', LeitorService);

    function LeitorService() {
        this.addItem = addItem;
        this.removeItem = removeItem;
        this.getItems = getItems;

        var vm = this;

        vm.items = [];

        function addItem(resultadoLeitor) {
            vm.items = vm.items.concat(resultadoLeitor);
        }

        function removeItem(resultadoLeitor) {
            vm.items.pop(resultadoLeitor);
        }

        function getItems() {
            return vm.items;
        }


    }
})();
