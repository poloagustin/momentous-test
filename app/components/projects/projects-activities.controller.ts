(function () {
    angular.module('momentousTest').controller('ProjectsActivitiesController', ProjectsActivitiesController);

    ProjectsActivitiesController.$inject = ['ActivitiesResource', 'lodash', '$stateParams', '$filter'];

    function ProjectsActivitiesController(ActivitiesResource: IProjectsResource, lodash, $stateParams, $filter) {
        var vm = this;

        (function () {
            vm.activities = [[], []];
            vm.data = [{}, {}];
            vm.labels = [];
            vm.series = ['Pending Activities', 'Completed Activities'];
            vm.options = {
                chart: {
                    type: 'lineChart',
                    height: 450,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 60,
                        left: 55
                    },
                    x: function (d) {
                        return $filter('date')(d.date, 'yyyyMMdd');
                    },
                    y: function (d) { return d.qty; },
                    showValues: true,
                    valueFormat: function (d) {
                        return d;
                    },
                    transitionDuration: 500,
                    xAxis: {
                        axisLabel: 'Date',
                        tickFormat: function (a) {
                            var e = '' + a;
                            return e.substr(6, 2) + '/' + e.substr(4, 2) + '/' + e.substr(0, 4);
                        }
                    },
                    yAxis: {
                        axisLabel: 'Quantity',
                        axisLabelDistance: 30
                    }
                }
            };
            fetchActivities();
        } ());

        function fetchActivities() {
            ActivitiesResource
                .query({ projectId: $stateParams.projectId })
                .$promise
                .then(onSuccess);

            function onSuccess(activities) {
                vm.labels = lodash.union($filter('date')(activities.map(function (e) { return e.date; }), 'dd/MM/yyyy'));
                vm.activities[0] = $filter('orderBy')($filter('filter')(activities, { status: 0 }), 'date');
                vm.activities[1] = $filter('orderBy')($filter('filter')(activities, { status: 1 }), 'date');
                vm.data = [{
                    values: vm.activities[0],
                    key: vm.series[0],
                    color: '#ff7f0e'
                }, {
                        values: vm.activities[1],
                        key: vm.series[1],
                        color: '#2ca02c'
                    }];
            }
        }
    }
} ());