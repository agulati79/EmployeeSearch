(function(angular) {
  

  var searchAlong = {
      templateUrl: 'employeeData.html',
      bindings: {
        onTextChange: '&',
        employees: '<'
      },
      controller: 'EmpSearchController',
      controllerAs: 'esc'
  }
  
  angular
    .module('empSearch')
    .component('searchAlong', searchAlong);
    
  function EmpSearchController($scope) {
  }
  
  angular
    .module('empSearch')
    .controller('EmpSearchController', EmpSearchController);
})(angular);