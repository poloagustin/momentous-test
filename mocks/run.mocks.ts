/// <reference path="../typings/tsd.d.ts" />

(function () {
    angular.module('momentousTestE2E').run(onRun);

    onRun.$inject = ['$httpBackend', 'ProjectsService'];

    function onRun($httpBackend: angular.IHttpBackendService, ProjectsService: IProjectsService) {
        $httpBackend.whenGET('api/projects').respond(returnProjects);

        $httpBackend.whenGET('api/projects/:id').respond(returnProject);

        $httpBackend.whenPOST('api/projects').respond(addProject);

        $httpBackend.whenGET(/^app\//).passThrough();
        $httpBackend.whenGET(/^assets\//).passThrough();

        function returnProjects() {
            return [200, ProjectsService.projects];
        }

        function returnProject(method, url, data, headers, params) {
            var project = ProjectsService.get(params.id);
            return [project === null ? 401 : 200, project];
        }

        function addProject(project: IProject) {
            ProjectsService.add(project);
        }
    }
} ());