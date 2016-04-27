(function () {
    angular.module('momentousTest').controller('ProjectsCreateController', ProjectsCreateController);

    ProjectsCreateController.$inject = ['ProjectsResource', 'toastr', '$state', '$window', 'availableStatus'];

    function ProjectsCreateController(ProjectsResource: IProjectsResource, toastr, $state: angular.ui.IStateService, $window: angular.IWindowService, availableStatus) {
        var vm = this;

        (function () {
            vm.action = 'Create';
            vm.project = {};
            vm.availableStatus = availableStatus;

            vm.submitForm = submitForm;
            vm.cancelForm = cancelForm;
        } ());

        function submitForm() {
            if ($window.confirm('Are you sure you want to save?')) {
                ProjectsResource.save(vm.project, onSuccess);
            }

            function onSuccess() {
                toastr.success('The project has been created.');
                $state.go('projects', null, { reload: true });
            }
        }

        function cancelForm() {
            if ($window.confirm('Are you sure you want to cancel?')) {
                $state.go('projects');
            }
        }
    }
} ());