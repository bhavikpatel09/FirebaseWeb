app.controller('appController', ["$rootScope", "$scope", "$http", function ($rootScope, $scope, $http) {
    $scope.appName = "Demo App";

    $scope.initApp = function () {
        if ($rootScope.orderList != undefined && $rootScope.orderList.length > 0) {

            $rootScope.orderCount = $rootScope.orderList.length;
        }
        else {
            $rootScope.orderCount = 0;
        }
        
    }
    $scope.logDetail = function (msg) {
        // windowLog(msg);


    }

}]);
