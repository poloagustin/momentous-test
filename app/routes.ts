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
                controller: 'ProjectsCreateController',
                controllerAs: 'projectsCreateVm',
                templateUrl: 'app/components/projects/create.view.html'
            }).state('projects.edit', {
                url: '/:id',
                controller: 'ProjectsEditController',
                controllerAs: 'projectsEditVm',
                templateUrl: 'app/components/projects/edit.view.html'
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