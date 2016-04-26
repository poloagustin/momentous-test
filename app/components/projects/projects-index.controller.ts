/// <reference path="../../../typings/tsd.d.ts" />

(function () {
    angular.module('momentousTest').controller('ProjectsIndexController', ProjectsIndexController);

    ProjectsIndexController.$inject = ['$state', 'ProjectsResource', 'UtilitiesService'];

    function ProjectsIndexController($state: angular.ui.IStateService, ProjectsResource: IProjectsResource, UtilitiesService: IUtilitiesService) {
        var vm = this;

        (function () {
            vm.projects = [];
            vm.filter = '';

            vm.go = $state.go;

            fetchProjects();
        } ());

        function fetchProjects() {
            ProjectsResource.query().$promise.then(onSuccess, onError);

            function onSuccess(projects: angular.resource.IResourceArray<IProject>) {
                vm.projects = projects;
            }

            function onError(error) {
                UtilitiesService.onError('There was an error fetching the projects', error);
            }
        }

    }
} ());