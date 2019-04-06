(function (angular) {
    'use strict';
    angular.module('app', [])

        .controller('IndexController', IndexController)

        // .config(function ($locationProvider) {
        //     $locationProvider.html5Mode(true);
        // })

        // .value('$routerRootComponent', 'app')

        // .component('app', {
        //     templateUrl: "./nav/nav.html",
        //     $routeConfig: [
        //         // { path: '', redirectTo: 'home', pathMatch: 'full' },
        //         { path: '/home/...', name: 'Home', component: 'home', useAsDefault: true }
        //         // { path: '**', component: 'home' }
        //         // {path: '/crisis-center/...', name: 'CrisisCenter', component: 'crisisCenter', useAsDefault: true},
        //         // {path: '/heroes/...', name: 'Heroes', component: 'heroes' }
        //     ],
        //     controller: IndexController
        // });

        function IndexController($scope) {
            // $scope.page = "home";
            var vm = this;
            // var vm = $scope;
            vm.page = "home";
            window.vm = vm;
        }
})(window.angular);
