/// <reference path="../typings/tsd.d.ts" />

(function () {
    var projects = [
        { id: 0, name: 'Project000' },
        { id: 1, name: 'Project001' },
        { id: 2, name: 'Project002' },
        { id: 3, name: 'Project003' },
        { id: 4, name: 'Project004' },
        { id: 5, name: 'Project005' },
    ];

    angular.module('momentousTestE2E').service('ProjectsService', ProjectsService);

    ProjectsService.$inject = ['localStorageService'];

    function ProjectsService(localStorageService: angular.local.storage.ILocalStorageService) {
        var svc = this;
        var PROJECTS_KEY = 'MomentousTestE2E-Projects';
        var localProjects = localStorageService.get(PROJECTS_KEY);

        if (!localProjects) {
            localStorageService.set(PROJECTS_KEY, projects);
            svc.projects = projects;
        } else {
            svc.projects = localProjects;
        }

        svc.add = add;
        svc.edit = edit;
        svc.get = get;

        function add(project: IProject) {
            svc.projects.push(project);
        }

        function edit(id: number, project: IProject) {
            for (var i = 0; i < svc.projects.length; i++) {
                var p = svc.projects[i];
                if (p.id == id) {
                    p = project;
                    break;
                }
            }
        }

        function get(id: number) {
            for (var i = 0; i < svc.projects.length; i++) {
                var p = svc.projects[i];
                if (p.id == id) {
                    return p;
                }
            }

            return null;
        }
    }
} ());

interface IProjectsService {
    projects: IProject[];
    get(id: any): IProject;
    edit(id: any, project: IProject);
    add(project: IProject);
}