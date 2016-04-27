(function () {
    angular.module('momentousTest').controller('ProjectsDetailsController', ProjectsDetailsController);

    ProjectsDetailsController.$inject = ['ProjectsResource', 'toastr', '$state', '$window', 'availableStatus', '$stateParams'];

    function ProjectsDetailsController(ProjectsResource: IProjectsResource, toastr, $state: angular.ui.IStateService, $window: angular.IWindowService, availableStatus, $stateParams) {
        var vm = this;

        (function () {
            vm.project = {};

            fetchProject();
        } ());

        function fetchProject() {
            ProjectsResource.get({ id: $stateParams['id'] }, onSuccess);

            function onSuccess(project) {
                vm.project = project;
            }
        }
    }
} ());