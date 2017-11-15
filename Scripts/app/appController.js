app.controller('appController', ["$rootScope", "$scope", "$http", function ($rootScope, $scope, $http) {
    $scope.appName = "Demo App";

    $scope.initApp = function () {
        $rootScope.vendorId = 4;
       // $scope.vendorId = 2;
        $scope.setNotifications();
       
    }
    $scope.logDetail = function (msg) {
        // windowLog(msg);
    }

    $scope.setNotifications = function () {
        var ref = $rootScope.database.ref("vendorNotifications/" + $rootScope.vendorId);
        ref.once('value', function (vendorNotifications) {
            vendorNotifications.forEach(function (vendorNotification) {
                var key = vendorNotification.key;
                var value = vendorNotification.val();                
                if (key == "vendorNotifications") {
                    if (value != null && value[$rootScope.vendorId] != null) {
                        var list = value[$rootScope.vendorId].notifications;
                        $rootScope.orderList = [];
                        angular.forEach(list, function (val) {
                            if (val.createdDate == undefined) { val.createdDate = new Date(); }
                            val.timeDifference = $scope.timeDifference(new Date(), new Date(val.createdDate));
                            $rootScope.orderList.push(val);
                        });
                        var unViewedOrders = $rootScope.orderList.filter(function (order) {
                            return order.isView === false;
                        });
                        if (unViewedOrders != undefined)
                            $rootScope.unViewedOrderCount = unViewedOrders.length;
                        setTimeout(function () { $scope.$apply(); }, 100);
                    }
                }
            });
        });
    }
    $scope.hoverIn = function (order) {
        //this.hoverEdit = true;
        //debugger;
    };

    $scope.hoverOut = function (order) {
        debugger;        
        if (order != undefined) {
            order = JSON.parse(angular.toJson(order));
            order.isView = true;            
            var updates = {};
            updates['/vendorNotifications/' + $rootScope.vendorId + "/notifications/" + order.key] = order;
            $rootScope.database.ref("vendorNotifications/" + $rootScope.vendorId /*+ "/notifications"*/).update(updates);
            //$rootScope.database.ref("/vendorNotifications/" + $rootScope.vendorId + "/notifications/" + order.key+"/isView").set(true);
        }
    };
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
    // Initialize Firebase
    $rootScope.firebaseConfig = {
        apiKey: "AIzaSyDnLl6973XNC9gcP6baRyWdWsZyZ1NcBoA",
        authDomain: "fir-send-receive-demo.firebaseapp.com",
        databaseURL: "https://fir-send-receive-demo.firebaseio.com",
        projectId: "fir-send-receive-demo",
        storageBucket: "fir-send-receive-demo.appspot.com",
        messagingSenderId: "206488944296"
    };
    firebase.initializeApp($rootScope.firebaseConfig);
    $rootScope.database = firebase.database();

}]);
