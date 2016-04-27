(function () {
    angular.module('momentousTest').controller('MainController', MainController);

    MainController.$inject = ['$state'];

    function MainController($state: angular.ui.IStateService) {
        var vm = this;

        (function () {
            vm.user = {
                username: 'Agustin Polo',
                role: 'Administrator',
                imageUrl: 'assets/user_male2-512.png'
            };

            vm.go = $state.go;

        } ());
    }
} ());
