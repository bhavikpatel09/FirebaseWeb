app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/user', {
        controller: 'userController',
        templateUrl: 'Templates/User.html'
    }).when('/vendor', {
        controller: 'vendorController',
        templateUrl: 'Templates/Vendor.html'
    }).otherwise({
        controller: 'userController',
        templateUrl: 'Templates/User.html'
    })
}]);