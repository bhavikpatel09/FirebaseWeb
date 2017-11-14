app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/User', {
        controller: 'userController',
        templateUrl: 'Templates/User.html'
    }).otherwise({
        controller: 'userController',
        templateUrl: 'Templates/User.html'
    })
}]);