App.controller('CustomerCtrl', function ($scope, $http) {

    $scope.dataPool = [];
    $scope.records = [];

    $http.get("http://localhost:55516/api/Customers").then(function (response) {
        $scope.dataPool = response.data;
        $scope.records = response.data;
    });

    $scope.getCustomersByID = function (controlID) {
        var id = document.getElementById(controlID).value;      
        var customers = [];
        for (var i = 0; i < $scope.dataPool.length; i++) {
            var record = $scope.dataPool[i];
            if (record.CustomerID === id) {
                customers.push(record);
            }
        }    
        $scope.records = customers;
    };

});

App.controller('OrderCtrl', function ($scope, $http) {

    $http.get("http://localhost:55516/api/Orders").then(function (response) {
        $scope.records = response.data;
    });
});
