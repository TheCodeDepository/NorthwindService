App.controller('IndexCtrl', function ($scope, $http, $filter) {

    $scope.records = [];
        $http.get("http://localhost:55516/api/Customers").then(function (response) {
        $scope.records = response.data;
    });

    $scope.headers = Object.keys($scope.records[0]);



    //$scope.removeItem = function removeItem(row) {
    //    var index = $scope.rowCollection.indexOf(row);
    //    if (index !== -1) {
    //        $scope.rowCollection.splice(index, 1);
    //    }
    //}

    ////$scope.getters = {
    ////    Orders: function (value) {
    ////        //this will sort by the length of the first name string
    ////        return value.length;
    ////    }
    ////}
});

App.controller('CustomerCtrl', function ($scope, $http) {

    $http.get("http://localhost:55516/api/Customers").then(function (response) {
        $scope.records = response.data;
        $scope.headers = Object.keys($scope.records[0]);
    });
});

App.controller('OrderCtrl', function ($scope, $http) {

    $http.get("http://localhost:55516/api/Orders").then(function (response) {
        $scope.records = response.data;
        $scope.headers = Object.keys($scope.records[0]);
    });
});
