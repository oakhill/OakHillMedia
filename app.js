(function (angular) {
    'use strict';
    angular.module('app', [])

        .controller('IndexController', IndexController)

        function IndexController($scope) {
            // $scope.page = "home";
            var vm = this;
            // var vm = $scope;
            vm.page = "home";
            window.vm = vm;
        }
})(window.angular);
