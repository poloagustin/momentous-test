/// <reference path="../../../typings/tsd.d.ts" />

(function () {
    angular.module('momentousTest').factory('ActivitiesResource', ActivitiesResource);

    ActivitiesResource.$inject = ['$resource'];

    function ActivitiesResource($resource: angular.resource.IResourceService) {
        var url = 'api/projects/:projectId/activities';
        var params = {
            projectId: '@projectId'
        };
        var actions = {};

        return $resource(url, params, actions);
    }
} ());

interface IProjectsResource extends angular.resource.IResourceClass<IProject> {

}