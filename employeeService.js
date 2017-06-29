( function( angular ) {
  angular.module( 'empSearch' ).service( 'EmployeeService', function( $filter ) {
    this.empData = [ {
      "policy_no": 100344412,
      "first_name": "Clark",
      "phone_no": 2761456123,
      "email": "sc@abc.com"
    }, {
      "policy_no": 003444121,
      "first_name": "Albert",
      "phone_no": 761456123,
      "email": "ad@abc.com"
    }, {
      "policy_no": 008444121,
      "first_name": "John",
      "phone_no": 76145613,
      "email": "pq@abc.com"
    }, {
      "policy_no": 09344414,
      "first_name": "Poker",
      "phone_no": 2761456123,
      "email": "ac@abc.com"
    }, {
      "policy_no": 1236868,
      "first_name": "Measo",
      "phone_no": +61456123,
      "email": "bc@abc.com"
    }, {
      "policy_no": 1686829,
      "first_name": "Rosan",
      "phone_no": 561456123,
      "email": "rt@abc.com"
    }, {
      "policy_no": 1368682,
      "first_name": "Pikman",
      "phone_no": 276146123,
      "email": "sq@abc.com"
    }, ]
    this.filteredEmp = function( searchKey ) {
      var emp = [];
      if(searchKey.length === 0){
        return emp;
      }
      var isnum = /^\d+$/.test(searchKey);
      if (!isnum){
        emp = $filter( 'filter' )( this.empData,{'first_name': searchKey});
      } else {
        emp = $filter( 'filter' )( this.empData,{'policy_no': searchKey});
      }
      
      return {
        emp
      };
    }
  } )
} )( angular );
