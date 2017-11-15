app.service('firebaseService', function () {

    // Initialize Firebase
    //var config = {
    //    apiKey: "AIzaSyDnLl6973XNC9gcP6baRyWdWsZyZ1NcBoA",
    //    authDomain: "fir-send-receive-demo.firebaseapp.com",
    //    databaseURL: "https://fir-send-receive-demo.firebaseio.com",
    //    projectId: "fir-send-receive-demo",
    //    storageBucket: "fir-send-receive-demo.appspot.com",
    //    messagingSenderId: "206488944296"
    //};



    //firebase.initializeApp(config);
    //debugger;
    //var database = firebase.database();

    //this.myFunc = function (x) {
    //    return x.toString(16);
    //};
    //this.otherFunction = function (x) {
    //    return x.toString(16);
    //}

    //this.saveOrderData = function (order) {
    //    var ref = firebase.database().ref('orderNotification/');
    //    if (order != undefined) {
    //        debugger;
    //        var key = order.guid;
    //        var obj = {};
    //        obj[key] = order;
    //        //myArray.push(obj);

    //        ref.update(obj);
    //    }
    //}
    //this.retrieveOrderData = function () {
    //    var placedOrders = [];
    //    var ref = firebase.database().ref('orderNotification/');
    //    ref.on("value", function (orders) {
    //        console.log(orders.val());
    //        debugger;
    //        if (orders.exists()) {
    //            placedOrders = [];
    //            var content = '';
    //            orders.forEach(function (data) {
    //                var val = data.val();
    //                debugger;
    //                placedOrders.push(val);
    //            });
    //        }
    //    }, function (error) {
    //        console.log("Error: " + error.code);
    //      //  return null;
    //    });
    //    return placedOrders;
    //}
});