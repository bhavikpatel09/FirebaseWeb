app.controller('userController', ["$rootScope", "$scope", "$http", "firebaseService", function ($rootScope,$scope, $http, fbs) {
 
    $scope.initUsers = function () {
        $scope.order = {};
        $rootScope.orderList = [];
        $rootScope.orderList.push({ orderId: 1, name: "Order One", message: "Notification Message.", price: "23$", createdDate: new Date(), timeDifference: $scope.timeDifference(new Date(), new Date()) });
        $rootScope.orderList.push({ orderId: 2, name: "Order Two", message: "Status has been changed.", price: "10$", createdDate: new Date(), timeDifference: $scope.timeDifference(new Date(), new Date())});
        $rootScope.orderList.push({ orderId: 3, name: "Order Three", message: "New items added in order.", price: "50$", createdDate: new Date(), timeDifference: $scope.timeDifference(new Date(), new Date()) });
        $rootScope.orderList.push({ orderId: 4, name: "Order Four", message: "Status has been changed.", price: "255$", createdDate: new Date(), timeDifference: $scope.timeDifference(new Date(), new Date()) });
        $rootScope.orderList.push({ orderId: 5, name: "Order Five", message: " Notification Message.", price: "150$", createdDate: new Date(), timeDifference: $scope.timeDifference(new Date(), new Date())});
        $rootScope.orderList.push({ orderId: 6, name: "Order Six", message: " Notification Message.", price: "2$", createdDate: new Date(), timeDifference: $scope.timeDifference(new Date(), new Date()) });

        $rootScope.orderCount = $rootScope.orderList.length;
    }

    $scope.saveOrder = function (order) {
        if (order != undefined) {
            order.createdDate = new Date();
            //$rootScope.orderCount = 6;
            //var name = $scope.userName;
            if ($rootScope.orderList != undefined) {
                $rootScope.orderList.push(order);
                $rootScope.orderCount = $rootScope.orderList.length;
                $scope.order = {};
            }

            order.guid = $scope.guid();
            fbs.saveOrderData(order);
        }
        if ($rootScope.orderList.length > 0) {
            for (var i = 0; i < $rootScope.orderList.length; i++) {
                $rootScope.orderList[i].timeDifference = $scope.timeDifference(new Date(), new Date($rootScope.orderList[i].createdDate));
            }
        }
        $scope.hex = fbs.myFunc(255);

        $scope.otherHeader = fbs.otherFunction(20); 
    }

    $scope.retrieveOrderData = function () {
        var allData = fbs.retrieveOrderData();
        if (allData != null) {
            $scope.placedOrders = allData;
            //$scope.$apply();
        }
    }
    $scope.timeDifference = function (current, previous) {

        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = current - previous;

        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' seconds ago';
        }

        else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' minutes ago';
        }

        else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hours ago';
        }

        else if (elapsed < msPerMonth) {
            return '' + Math.round(elapsed / msPerDay) + ' days ago';
        }

        else if (elapsed < msPerYear) {
            return '' + Math.round(elapsed / msPerMonth) + ' months ago';
        }

        else {
            return '' + Math.round(elapsed / msPerYear) + ' years ago';
        }
    }

    $scope.guid = function() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
}]);
