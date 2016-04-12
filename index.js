angular.module('angularAPP', []).controller('AngularController', function($scope, $http) {
  $scope.estado = 'https://www.portalpravaler.com.br/api/estado/v1';

  $http({method: 'GET', url: $scope.estado, cache: true}).success(function (dataAPI) {
    $scope.optionsEstado = dataAPI.estados;
  });
});
