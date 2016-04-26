(function () {
    angular.module('momentousTest').controller('ProjectsCreateController', ProjectsCreateController);

    ProjectsCreateController.$inject = ['ProjectsResource', 'toastr', '$state', '$window'];

    function ProjectsCreateController(ProjectsResource: IProjectsResource, toastr, $state: angular.ui.IStateService, $window: angular.IWindowService) {
        var vm = this;

        (function () {
            vm.action = 'Create';
            vm.project = new ProjectsResource();

            vm.submitForm = submitForm;
            vm.cancelForm = cancelForm;
        } ());

        function submitForm() {
            if ($window.confirm('Are you sure you want to save?')) {
                vm.project.$save(onSuccess);
            }

            function onSuccess() {
                toastr.success('The project has been created.');
            }
        }

        function cancelForm() {
            if ($window.confirm('Are you sure you want to cancel?')) {
                $state.go('projects');
            }
        }
    }
} ());