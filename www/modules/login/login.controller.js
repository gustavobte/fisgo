(function () {
  'use strict';

  angular
    .module('fisgo')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location'];

  function LoginController($location) {
    var vm = this;


    vm.username = '123';
    vm.password = '123';

    vm.login = function () {
      if (vm.username == '123' && vm.password == '123') {
        $location.path('/app/home');
        console.log('Logado')
      } else {
        console.log('Usuário e/ou senha incorreto(s)');
      }
    };
  }
})();



