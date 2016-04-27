(function () {
    angular.module('momentousTest').controller('ProjectsEditController', ProjectsEditController);

    ProjectsEditController.$inject = ['ProjectsResource', 'toastr', '$state', '$window', '$stateParams', 'availableStatus'];

    function ProjectsEditController(ProjectsResource: IProjectsResource, toastr, $state: angular.ui.IStateService, $window: angular.IWindowService, $stateParams: angular.ui.IStateParamsService, availableStatus) {
        var vm = this;

        (function () {
            vm.action = 'Edit';
            vm.project = new ProjectsResource();
            vm.availableStatus = availableStatus;

            vm.submitForm = submitForm;
            vm.cancelForm = cancelForm;

            fetchProject();
        } ());

        function submitForm() {
            if ($window.confirm('Are you sure you want to save?')) {
                vm.project.$update(onSuccess);
            }

            function onSuccess() {
                toastr.success('The project has been updated.');
                $state.go('projects', null, { reload: true });
            }
        }

        function cancelForm() {
            if ($window.confirm('Are you sure you want to cancel?')) {
                $state.go('projects');
            }
        }

        function fetchProject() {
            ProjectsResource.get({ id: $stateParams['id'] }, onSuccess);

            function onSuccess(project) {
                vm.project = project;
            }
        }
    }
} ());