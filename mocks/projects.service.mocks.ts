/// <reference path="../typings/tsd.d.ts" />

(function () {
    var projects = [
        {
            id: 0,
            name: 'Project000',
            description: 'Project000Description',
            notes: '',
            relatedRfi: '',
            status: { id: 0, name: 'Pending' },
            activities: [
                { date: new Date(2016, 1, 1), status: 0, qty: 6 },
                { date: new Date(2016, 1, 2), status: 0, qty: 4 },
                { date: new Date(2016, 1, 3), status: 0, qty: 7 },
                { date: new Date(2016, 1, 4), status: 0, qty: 3 },
                { date: new Date(2016, 1, 5), status: 0, qty: 2 },
                { date: new Date(2016, 1, 6), status: 0, qty: 8 },
                { date: new Date(2016, 1, 7), status: 0, qty: 4 },
                { date: new Date(2016, 1, 8), status: 0, qty: 9 },
                { date: new Date(2016, 1, 1), status: 1, qty: 4 },
                { date: new Date(2016, 1, 2), status: 1, qty: 3 },
                { date: new Date(2016, 1, 3), status: 1, qty: 5 },
                { date: new Date(2016, 1, 4), status: 1, qty: 6 },
                { date: new Date(2016, 1, 5), status: 1, qty: 1 },
                { date: new Date(2016, 1, 6), status: 1, qty: 3 },
                { date: new Date(2016, 1, 7), status: 1, qty: 3 },
                { date: new Date(2016, 1, 8), status: 1, qty: 8 },
            ]
        },
        {
            id: 1,
            name: 'Project001',
            description: 'Project001Description',
            notes: '',
            relatedRfi: '',
            status: { id: 0, name: 'Pending' },
            activities: [
                { date: new Date(2016, 1, 1), status: 0, qty: 6 },
                { date: new Date(2016, 1, 2), status: 0, qty: 4 },
                { date: new Date(2016, 1, 3), status: 0, qty: 7 },
                { date: new Date(2016, 1, 4), status: 0, qty: 3 },
                { date: new Date(2016, 1, 5), status: 0, qty: 2 },
                { date: new Date(2016, 1, 6), status: 0, qty: 8 },
                { date: new Date(2016, 1, 7), status: 0, qty: 4 },
                { date: new Date(2016, 1, 8), status: 0, qty: 9 },
                { date: new Date(2016, 1, 1), status: 1, qty: 4 },
                { date: new Date(2016, 1, 2), status: 1, qty: 3 },
                { date: new Date(2016, 1, 3), status: 1, qty: 5 },
                { date: new Date(2016, 1, 4), status: 1, qty: 6 },
                { date: new Date(2016, 1, 5), status: 1, qty: 1 },
                { date: new Date(2016, 1, 6), status: 1, qty: 3 },
                { date: new Date(2016, 1, 7), status: 1, qty: 3 },
                { date: new Date(2016, 1, 8), status: 1, qty: 8 },
            ]
        },
        {
            id: 2,
            name: 'Project002',
            description: 'Project002Description',
            notes: '',
            relatedRfi: '',
            status: { id: 0, name: 'Pending' },
            activities: [
                { date: new Date(2016, 1, 1), status: 0, qty: 6 },
                { date: new Date(2016, 1, 2), status: 0, qty: 4 },
                { date: new Date(2016, 1, 3), status: 0, qty: 7 },
                { date: new Date(2016, 1, 4), status: 0, qty: 3 },
                { date: new Date(2016, 1, 5), status: 0, qty: 2 },
                { date: new Date(2016, 1, 6), status: 0, qty: 8 },
                { date: new Date(2016, 1, 7), status: 0, qty: 4 },
                { date: new Date(2016, 1, 8), status: 0, qty: 9 },
                { date: new Date(2016, 1, 1), status: 1, qty: 4 },
                { date: new Date(2016, 1, 2), status: 1, qty: 3 },
                { date: new Date(2016, 1, 3), status: 1, qty: 5 },
                { date: new Date(2016, 1, 4), status: 1, qty: 6 },
                { date: new Date(2016, 1, 5), status: 1, qty: 1 },
                { date: new Date(2016, 1, 6), status: 1, qty: 3 },
                { date: new Date(2016, 1, 7), status: 1, qty: 3 },
                { date: new Date(2016, 1, 8), status: 1, qty: 8 },
            ]
        },
        {
            id: 3,
            name: 'Project003',
            description: 'Project003Description',
            notes: '',
            relatedRfi: '',
            status: { id: 0, name: 'Pending' },
            activities: [
                { date: new Date(2016, 1, 1), status: 0, qty: 6 },
                { date: new Date(2016, 1, 2), status: 0, qty: 4 },
                { date: new Date(2016, 1, 3), status: 0, qty: 7 },
                { date: new Date(2016, 1, 4), status: 0, qty: 3 },
                { date: new Date(2016, 1, 5), status: 0, qty: 2 },
                { date: new Date(2016, 1, 6), status: 0, qty: 8 },
                { date: new Date(2016, 1, 7), status: 0, qty: 4 },
                { date: new Date(2016, 1, 8), status: 0, qty: 9 },
                { date: new Date(2016, 1, 1), status: 1, qty: 4 },
                { date: new Date(2016, 1, 2), status: 1, qty: 3 },
                { date: new Date(2016, 1, 3), status: 1, qty: 5 },
                { date: new Date(2016, 1, 4), status: 1, qty: 6 },
                { date: new Date(2016, 1, 5), status: 1, qty: 1 },
                { date: new Date(2016, 1, 6), status: 1, qty: 3 },
                { date: new Date(2016, 1, 7), status: 1, qty: 3 },
                { date: new Date(2016, 1, 8), status: 1, qty: 8 },
            ]
        },
        {
            id: 4,
            name: 'Project004',
            description: 'Project004Description',
            notes: '',
            relatedRfi: '',
            status: { id: 0, name: 'Pending' },
            activities: [
                { date: new Date(2016, 1, 1), status: 0, qty: 6 },
                { date: new Date(2016, 1, 2), status: 0, qty: 4 },
                { date: new Date(2016, 1, 3), status: 0, qty: 7 },
                { date: new Date(2016, 1, 4), status: 0, qty: 3 },
                { date: new Date(2016, 1, 5), status: 0, qty: 2 },
                { date: new Date(2016, 1, 6), status: 0, qty: 8 },
                { date: new Date(2016, 1, 7), status: 0, qty: 4 },
                { date: new Date(2016, 1, 8), status: 0, qty: 9 },
                { date: new Date(2016, 1, 1), status: 1, qty: 4 },
                { date: new Date(2016, 1, 2), status: 1, qty: 3 },
                { date: new Date(2016, 1, 3), status: 1, qty: 5 },
                { date: new Date(2016, 1, 4), status: 1, qty: 6 },
                { date: new Date(2016, 1, 5), status: 1, qty: 1 },
                { date: new Date(2016, 1, 6), status: 1, qty: 3 },
                { date: new Date(2016, 1, 7), status: 1, qty: 3 },
                { date: new Date(2016, 1, 8), status: 1, qty: 8 },
            ]
        },
        {
            id: 5,
            name: 'Project005',
            description: 'Project005Description',
            notes: '',
            relatedRfi: '',
            status: { id: 0, name: 'Pending' },
            activities: [
                { date: new Date(2016, 1, 1), status: 0, qty: 6 },
                { date: new Date(2016, 1, 2), status: 0, qty: 4 },
                { date: new Date(2016, 1, 3), status: 0, qty: 7 },
                { date: new Date(2016, 1, 4), status: 0, qty: 3 },
                { date: new Date(2016, 1, 5), status: 0, qty: 2 },
                { date: new Date(2016, 1, 6), status: 0, qty: 8 },
                { date: new Date(2016, 1, 7), status: 0, qty: 4 },
                { date: new Date(2016, 1, 8), status: 0, qty: 9 },
                { date: new Date(2016, 1, 1), status: 1, qty: 4 },
                { date: new Date(2016, 1, 2), status: 1, qty: 3 },
                { date: new Date(2016, 1, 3), status: 1, qty: 5 },
                { date: new Date(2016, 1, 4), status: 1, qty: 6 },
                { date: new Date(2016, 1, 5), status: 1, qty: 1 },
                { date: new Date(2016, 1, 6), status: 1, qty: 3 },
                { date: new Date(2016, 1, 7), status: 1, qty: 3 },
                { date: new Date(2016, 1, 8), status: 1, qty: 8 },
            ]
        },
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
        svc.getActivities = getActivities;

        function add(project: IProject) {
            project.id = svc.projects.length;
            svc.projects.push(project);
            localStorageService.set(PROJECTS_KEY, svc.projects)
        }

        function edit(id: number, project: IProject) {
            for (var i = 0; i < svc.projects.length; i++) {
                if (svc.projects[i].id == id) {
                    svc.projects[i] = project;
                    localStorageService.set(PROJECTS_KEY, svc.projects)
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

        function getActivities(id) {
            for (var i = 0; i < svc.projects.length; i++) {
                var p = svc.projects[i];
                if (p.id == id) {
                    return p.activities;
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
    getActivities(projectId: any);
}