(function () {
  'use strict';

  angular
    .module('fisgo')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location'];

  function LoginController($location) {
    var vm = this;

    vm.user = '';
    vm.pass = '';

    vm.login = function () {

      if (vm.user == '123' && vm.pass == '123') {
        $location.path('/home');
        console.log('Logado')
      } else {
        console.log('Usuário e/ou senha incorreto(s)');
      }
    };

  }

})();



