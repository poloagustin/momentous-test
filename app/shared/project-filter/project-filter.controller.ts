(function () {
    angular.module('momentousTest').controller('ProjectFilterController', ProjectFilterController);

    ProjectFilterController.$inject = ['$modalInstance', 'availableStatus', 'filter'];

    function ProjectFilterController($modalInstance, availableStatus, filter) {
        var vm = this;

        (function () {
            vm.availableStatus = availableStatus;
            vm.filter = filter;
            
            vm.dismiss = $modalInstance.dismiss;
            vm.close = $modalInstance.close;
        } ());
    }
} ());