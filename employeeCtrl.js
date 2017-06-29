(function(angular) {
  angular.module('empSearch').controller('empController', function (EmployeeService) {
    var vm = this;
    vm.employees = [];

    vm.empSearch = function(searchQuery) {
      vm.apiEmpData = EmployeeService.filteredEmp(searchQuery)
      vm.employees = vm.apiEmpData.emp;
    }
  });
})(angular)