var app = angular.module('app', ['ng', 'ngRoute'])
    .config(function ($httpProvider) {
        //debugger
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    });