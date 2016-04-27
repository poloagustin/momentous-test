/// <reference path="../typings/tsd.d.ts" />

(function () {
    angular.module('momentousTestE2E').run(onRun);

    onRun.$inject = ['$httpBackend', 'ProjectsService'];

    function onRun($httpBackend, ProjectsService: IProjectsService) {
        $httpBackend.whenGET('api/projects').respond(returnProjects);

        $httpBackend.whenRoute('GET', 'api/projects/:projectId/activities').respond(getActivities);

        $httpBackend.whenRoute('GET', 'api/projects/:id').respond(returnProject);

        $httpBackend.whenPOST('api/projects').respond(addProject);

        $httpBackend.whenRoute('PUT', 'api/projects/:id').respond(udpateProject);
        
        $httpBackend.whenGET(/^app\//).passThrough();
        $httpBackend.whenGET(/^assets\//).passThrough();

        function returnProjects() {
            return [200, ProjectsService.projects];
        }

        function returnProject(method, url, data, headers, params) {
            var project = ProjectsService.get(params.id);
            return [project === null ? 401 : 200, project];
        }

        function addProject(method, url, project: string, headers, params) {
            ProjectsService.add(angular.fromJson(project));
            return [200, project];
        }

        function udpateProject(method, url, project: string, headers, params) {
            ProjectsService.edit(params.id, angular.fromJson(project));
            return [200, project];
        }
        
        function getActivities(method, url, project: string, headers, params) {
            var act = ProjectsService.getActivities(params.projectId);
            return [200, act];
        }
    }
} ());