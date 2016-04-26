(function () {
    angular.module('momentousTest').controller('MainController', MainController);

    MainController.$inject = ['$state'];

    function MainController($state: angular.ui.IStateService) {
        var vm = this;

        (function () {
            vm.user = {};

            vm.go = $state.go;

        } ());
    }
} ());
