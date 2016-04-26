/// <reference path="../../../typings/tsd.d.ts" />

(function () {
    angular.module('momentousTest').factory('ProjectsResource', ProjectsResource);

    ProjectsResource.$inject = ['$resource'];

    function ProjectsResource($resource: angular.resource.IResourceService) {
        var url = 'api/projects/:id';
        var params = {
            id: '@id'
        };
        var actions = {};

        return $resource(url, params, actions);
    }
} ());

interface IProjectsResource extends angular.resource.IResourceClass<IProject> {

}