(function () {
    'use strict';

    angular
        .module('fisgo')
        .service('OcorrenciasService', OcorrenciasService);

    OcorrenciasService.$inject = ['$http', '$q'];

    function OcorrenciasService($http, $q) {
        this.buscaNFES = buscaNFES;
        this.buscaOcorrenciasCNPJ = buscaOcorrenciasCNPJ;
        this.buscaOcorrenciasPlaca = buscaOcorrenciasPlaca;
        this.buscaAtuacoes = buscaAtuacoes;

        var nfes = 'bd/nfes.json';
        var ocorrenciasCNPJ = 'bd/ocorrenciasCNPJ.json';
        var ocorrenciasPlaca = 'bd/ocorrenciasPlaca.json';
        var atuacoes = 'bd/atuacoes.json';

        function buscaNFES(numDocumento) {
            var deferred = $q.defer();
            // TODO: filtrar por número de documento quando fizer integração com banco de dados
            $http.get(nfes).then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };

        function buscaOcorrenciasCNPJ(numDocumento) {
            var deferred = $q.defer();
            // TODO: filtrar por número de documento quando fizer integração com banco de dados
            $http.get(ocorrenciasCNPJ).then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };

        function buscaOcorrenciasPlaca(numDocumento) {
            var deferred = $q.defer();
            // TODO: filtrar por número de documento quando fizer integração com banco de dados
            $http.get(ocorrenciasPlaca).then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };

        function buscaAtuacoes(cpfFiscal) {
            var deferred = $q.defer();
            // TODO: filtrar por número de documento quando fizer integração com banco de dados
            $http.get(atuacoes).then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };
    }
})();