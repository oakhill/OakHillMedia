(function (angular) {
    'use strict';
    angular.module('home')

        .component('home', {
            templateUrl: "./home/home.html",
            // template:'<h1>HELLO!</h1><ng-outlet></ng-outlet>'
            // $routeConfig: [
            //     { path: 'home', name: 'Home', component: 'home', useAsDefault: true }
            // ]
            bindings: { 
                scope: '=' 
            },
            controller: HomeController
        })

    function HomeController($scope) {
        var $ctrl = this;
        $ctrl.page = "home";
        $scope.page = "home";
    }

})(window.angular);
