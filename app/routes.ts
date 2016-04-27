/// <reference path="../typings/tsd.d.ts" />

(function () {
    angular.module('momentousTest').config(configureRoutes);

    configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configureRoutes($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
        $stateProvider
            .state('projects', {
                url: '/projects',
                controller: 'ProjectsIndexController',
                controllerAs: 'projectsIndexVm',
                templateUrl: 'app/components/projects/index.view.html'
            }).state('projects.create', {
                url: '/create',
                views: {
                    'content': {
                        controller: 'ProjectsCreateController',
                        controllerAs: 'projectsVm',
                        templateUrl: 'app/components/projects/form.view.html'
                    }
                }
            }).state('projects.edit', {
                url: '/:id',
                views: {
                    'content': {
                        controller: 'ProjectsEditController',
                        controllerAs: 'projectsVm',
                        templateUrl: 'app/components/projects/form.view.html'
                    }
                }
            }).state('projects.details', {
                url: '/:id/details',
                views: {
                    'content': {
                        controller: 'ProjectsDetailsController',
                        controllerAs: 'projectsVm',
                        templateUrl: 'app/components/projects/details.view.html'
                    }
                }
            }).state('projects.activities', {
                url: '/:projectId/activities',
                views: {
                    'content': {
                        controller: 'ProjectsActivitiesController',
                        controllerAs: 'projectsVm',
                        templateUrl: 'app/components/projects/activities.view.html'
                    }
                }
            }).state('onConstruction', {
                url: '/on-construction',
                controller: 'OnConstructionController',
                controllerAs: 'onConstructionVm',
                templateUrl: 'app/components/on-construction/index.view.html'
            }).state('notFound', {
                url: '/not-found',
                controller: 'NotFoundController',
                controllerAs: 'notFoundVm',
                templateUrl: 'app/components/not-found/index.view.html'
            });

        $urlRouterProvider.otherwise('/projects');
    }
} ());