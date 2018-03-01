App.controller('CustomerCtrl', function ($scope, $http) {
    $http.get("http://localhost:55516/api/Customers").then(function (response) {
        $scope.records = response.data;
    });
});



       
