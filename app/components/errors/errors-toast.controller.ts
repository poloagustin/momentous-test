/// <reference path="../../../typings/tsd.d.ts" />

(function () {
    angular.module('momentousTest').controller('ErrorToastController', ErrorToastController);

    ErrorToastController.$inject = ['$mdToast', '$mdDialog'];

    function ErrorToastController($mdToast: angular.material.IToastService, $mdDialog: angular.material.IDialogService) {
        var vm = this;

        (function () {
            vm.closeToast = closeToast;
            vm.openMoreInfo = openMoreInfo;
        } ());

        function closeToast() {
            $mdToast.hide();
        }

        function openMoreInfo(error: any, $event: MouseEvent) {
            $mdDialog.show(
                $mdDialog
                    .alert()
                    .title('Error')
                    .textContent(vm.error.message)
                    .ariaLabel('Error Detail')
                    .ok('Close')
                    .targetEvent($event));
        }
    }
} ());