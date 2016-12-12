(function () {
    'use strict';

    angular
        .module('fisgo')
        .service('PendenciasService', PendenciasService);

    PendenciasService.$inject = ['$http', '$q'];

    function PendenciasService($http, $q) {
        this.buscaNFES = buscaNFES;
        this.buscaPendenciasCNPJ = buscaPendenciasCNPJ;
        this.buscaPendenciasPlaca = buscaPendenciasPlaca;

        var nfes = '/bd/nfes.json';
        var pendenciasCNPJ = '/bd/pendenciasCNPJ.json';
        var pendenciasPlaca = '/bd/pendenciasPlaca.|json';

        function buscaNFES(numDocumento) {
            var deferred = $q.defer();
            // TODO: filtrar por número de documento quando fizer integração com banco de dados
            $http.get(nfes).then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };

        function buscaPendenciasCNPJ(numDocumento) {
            var deferred = $q.defer();
            // TODO: filtrar por número de documento quando fizer integração com banco de dados
            $http.get(pendenciasCNPJ).then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };

        function buscaPendenciasPlaca(numDocumento) {
            var deferred = $q.defer();
            // TODO: filtrar por número de documento quando fizer integração com banco de dados
            $http.get(pendenciasPlaca).then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };
    }
})();