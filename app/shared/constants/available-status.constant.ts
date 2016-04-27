(function () {
    var availableStatus = [
        { id: 0, name: 'Pending' },
        { id: 1, name: 'Approved' },
        { id: 2, name: 'Cancelled' }
    ];

    angular.module('momentousTest').constant('availableStatus', availableStatus);
} ());