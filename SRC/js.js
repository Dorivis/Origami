(function() {
  'use strict';


  angular
    .module('myApp', ['ngMaterial'])
    .controller('MenuController', MenuController);

  function MenuController($http,$scope, $mdDialog) {
    this.currentNavItem = 'home';
    this.goto = function(page) {
      this.currentNavItem = page;
    };
    $scope.opcoesProdServ = ['Cooperativo','Individual'];
    this.popUpContratos = function(tipoEmpresa, servicoContratado, diaRecebimento, recebimento, empresa)
    {
      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title(empresa)
          .textContent('Tipo empresa: ' + tipoEmpresa + '\r\n' + 'Serviço contratado: ' + servicoContratado + '\r\n' + 
          'Dia Recebimento: ' + diaRecebimento + '\r\n' + 'Recebimento: ' + recebimento)
          .ariaLabel('Left to right demo')
          .ok('OK!')
          // You can specify either sting with query selector
          .openFrom('#left')
          // or an element
          .closeTo(angular.element(document.querySelector('#right'))) 
    );
    }
    //Chamada da API de consulta de saldo
    $scope.limite = 0;
    $scope.qtdClientes = 0;
    $scope.Clientes = 0;
    $http({
            method: 'GET',
            url: 'https://sandbox.original.com.br/accounts/v1/balance',
            headers: {'Authorization':'Bearer OGM4MTQ3NjAtZDc4ZS0xMWU3LWJjNTEtMDA1MDU2OWE3MzA1OmV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUowZVhCbElqb2lUMEYxZEdnaUxDSnBZWFFpT2pFMU1USXlNemt6Tmprc0ltVjRjQ0k2TVRVeE1qWTNNVE0yT1N3aVlYVmtJam9pTUdZNFpEQTRNV1FpTENKcGMzTWlPaUphZFhBdWJXVWdSMkYwWlhkaGVTSXNJbk4xWWlJNklqaGpPREUwTnpZd0xXUTNPR1V0TVRGbE55MWlZelV4TFRBd05UQTFOamxoTnpNd05TSXNJbXAwYVNJNkltSmlaVE14T1dNd0xXUTNPR1V0TVRGbE55MWhOMk13TFdNeE56WXlaRFl3TlRRME5pSjkuVVhRUnF1b0RKWW1nZXAtODlPR2VsNkFkbFJxb1lOaHA4amNENTlhelJydw==','developer-key':'28f905c90f3a2980134df1a9000508569a17facd'}
        }).success(function(resposta){
            $scope.limite = resposta.current_balance;
            console.log($scope.limite);
            $scope.limite = $scope.limite;
        }).error(function(){
           
        });
    //Chamada da API de consulta de saldo de programas por pontos
    $http({
            method: 'GET',
            url: 'https://sandbox.original.com.br/rewards/v1/balance',
            headers: {'Authorization':'Bearer OGM4MTQ3NjAtZDc4ZS0xMWU3LWJjNTEtMDA1MDU2OWE3MzA1OmV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUowZVhCbElqb2lUMEYxZEdnaUxDSnBZWFFpT2pFMU1USXlNemt6Tmprc0ltVjRjQ0k2TVRVeE1qWTNNVE0yT1N3aVlYVmtJam9pTUdZNFpEQTRNV1FpTENKcGMzTWlPaUphZFhBdWJXVWdSMkYwWlhkaGVTSXNJbk4xWWlJNklqaGpPREUwTnpZd0xXUTNPR1V0TVRGbE55MWlZelV4TFRBd05UQTFOamxoTnpNd05TSXNJbXAwYVNJNkltSmlaVE14T1dNd0xXUTNPR1V0TVRGbE55MWhOMk13TFdNeE56WXlaRFl3TlRRME5pSjkuVVhRUnF1b0RKWW1nZXAtODlPR2VsNkFkbFJxb1lOaHA4amNENTlhelJydw==','developer-key':'28f905c90f3a2980134df1a9000508569a17facd'}
        }).success(function(resposta){
            $scope.qtdClientes = Object.keys(resposta).length;
            $scope.Clientes    = resposta;
            console.log($scope.qtdClientes);
            console.log($scope.Clientes);
            $scope.qtdClientes = $scope.qtdClientes;
            $scope.Clientes = $scope.Clientes;
        }).error(function(){
           
        });
    
  }
  
  function AppCtrl($scope) {
    

    
  }
  
  
  
})();