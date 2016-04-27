/// <reference path="../../../typings/tsd.d.ts" />

(function () {
    angular.module('momentousTest').controller('ProjectsIndexController', ProjectsIndexController);

    ProjectsIndexController.$inject = ['$state', 'ProjectsResource', 'UtilitiesService', '$modal'];

    function ProjectsIndexController($state: angular.ui.IStateService, ProjectsResource: IProjectsResource, UtilitiesService: IUtilitiesService, $modal) {
        var vm = this;

        (function () {
            vm.projects = [];
            vm.filter = {
            };

            vm.go = $state.go;
            vm.openFilter = openFilter;

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

        function openFilter() {
            var backupFilter = vm.filter;
            $modal.open({
                templateUrl: 'app/shared/project-filter/index.view.html',
                controller: 'ProjectFilterController',
                controllerAs: 'projectFilterVm',
                bindToController: true,
                resolve: {
                    filter: function () {
                        return vm.filter;
                    }
                }
            }).result
                .then(onSuccess, onCancel);

            function onSuccess(filter) {
                vm.filter = filter;
            }

            function onCancel() {
                vm.filter = backupFilter;
            }
        }
    }
} ());