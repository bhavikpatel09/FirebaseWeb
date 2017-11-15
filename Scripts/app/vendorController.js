app.controller('vendorController', ["$rootScope", "$scope", "$http", "firebaseService", function ($rootScope, $scope, $http, fbs) {

    $scope.initVendors = function () {
        $scope.vendorNotificationsRef = $rootScope.database.ref("vendorNotifications/" + $rootScope.vendorId /*+ "/notifications"*/);
        $scope.order = { price: '25 $', name: 'new order', message: 'new order arrived!!!' };
        $scope.placedOrders = [];
        //$scope.placedOrders.push({ orderId: 6, name: "Order Six", message: " Notification Message.", price: "2$", createdDate: new Date(), timeDifference: $scope.timeDifference(new Date(), new Date()) });
        
        //var allData = fbs.retrieveOrderData();
        //if (allData != null) {
        //    $scope.placedOrders = allData;
        //    //$scope.$apply();
        //    $rootScope.orderList = allData;
        //}        

        //$scope.$apply();
        //var ref = $rootScope.database.ref("vendorNotifications/" + $rootScope.vendorId+ "/notifications/");
        //ref.on('value', function (snapshot) {
        //    $scope.valueChangeNotificationListner(snapshot.val());
        //});


        ////$scope.vendorNotificationsRef.on('value', function (snapshot) {
        ////    debugger
        ////    $scope.valueChangeNotificationListner(snapshot);

        ////});

        //var notificationsRef = $rootScope.database.ref("vendorNotifications/" + $rootScope.vendorId);
        $scope.vendorNotificationsRef.on('child_added', function (data) {
            $scope.addNotificationListner(data.key, data.val(), $rootScope.vendorId);
        });

        $scope.vendorNotificationsRef.on('child_changed', function (data) {
            $scope.setNotificationListner(data.key, data.val(), $rootScope.vendorId);
        });

        $scope.vendorNotificationsRef.on('child_removed', function (data) {
            $scope.deleteNotificationListner(data.key);
        });
    }

    //$scope.valueChangeNotificationListner = function (snapshot) {
    //    debugger;
    //    var value = snapshot.val();
    //    snapshot.forEach(function (childSnapshot) {
    //        var childKey = childSnapshot.key;
    //        var childData = childSnapshot.val();
    //    });
    //}

    $scope.addNotificationListner = function (key, val, vendorId) {
        debugger;
        if (key == "vendorNotifications") {
            if (val != null && val[vendorId] != null) {
                var list = val[vendorId].notifications;
                $scope.placedOrders = [];
                angular.forEach(list, function (val) {
                    if (val.createdDate == undefined) { val.createdDate = new Date(); }
                    val.timeDifference = $scope.timeDifference(new Date(), new Date(val.createdDate));
                    $scope.placedOrders.push(val);
                });
                console.log($scope.placedOrders);
                $rootScope.orderList = $scope.placedOrders;
                $scope.$apply();
            }
          
            //$rootScope.orderCount = $scope.placedOrders.length;
          
        }
        
    }
    $scope.setNotificationListner = function (key, val, vendorId) {
        if (key == "vendorNotifications") {
            if (val != null && val[vendorId] != null) {
                var list = val[vendorId].notifications;
                $scope.placedOrders= [];
                angular.forEach(list, function (val) {
                    if (val.createdDate == undefined) { val.createdDate = new Date(); }
                    val.timeDifference = $scope.timeDifference(new Date(), new Date(val.createdDate));
                    $scope.placedOrders.push(val);
                    
                });
                console.log($scope.placedOrders);
                $rootScope.orderList = $scope.placedOrders;
                $scope.$apply();
            }            
        }
        debugger;
    }
    $scope.deleteNotificationListner = function (key) {
    }
    $scope.saveOrder = function (order) {

        if (order != undefined) {
            order.isView = false;
            order.isStatusChanged = false;
            order.oldStatus = "";
            order.newStatus = "";
            order.createdDate = new Date();
            // Get a key for a new Post.
            var newPostKey = $scope.vendorNotificationsRef.child('notifications').push().key;
            var updates = {};
            updates['/vendorNotifications/' + $scope.vendorId + "/notifications/" + newPostKey] = order;
            $scope.vendorNotificationsRef.update(updates);
            //$scope.order = {};
        }
    }

    $scope.retrieveOrderData = function () {
        var allData = fbs.retrieveOrderData();
        if (allData != null) {
            $scope.placedOrders = $scope.prepareOrderList(allData);
            //$scope.$apply();
        }
    }
    $scope.prepareOrderList = function (data) {
        if (data != undefined && data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                data[i].timeDifference = $scope.timeDifference(new Date(), new Date(data[i].createdDate));
            }
            return data;
        }
        return null;
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

    $scope.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
}]);
