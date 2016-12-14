(function () {
    'use strict';

    angular
        .module('fisgo')
        .service('LeitorService', LeitorService);

    function LeitorService() {
        this.addItem = addItem;
        this.removeItem = removeItem;
        this.getItems = getItems;
        this.exist = exist;

        var vm = this;

        vm.items = [];

        function addItem(resultadoLeitor) {
            vm.items = vm.items.concat(resultadoLeitor);
        }

        function removeItem(resultadoLeitor) {
            vm.items.pop(resultadoLeitor);
        }

        function exist(resultadoLeitor) {
            var array = vm.items.filter(function(obj) {
                return obj.dados == resultadoLeitor.dados;
            });
            return array.length > 0
        }

        function getItems() {
            return vm.items;
        }


    }
})();
