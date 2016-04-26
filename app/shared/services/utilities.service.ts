/// <reference path="../../../typings/tsd.d.ts" />

(function () {
    angular.module('momentousTest').service('UtilitiesService', UtilitiesService);

    UtilitiesService.$inject = ['toastr'];

    function UtilitiesService(toastr) {
        var svc = this;

        svc.onError = onError;

        function onError(message, error) {
            toastr.error(message, 'Error');
        }
    }
} ());

interface IUtilitiesService {
    onError(message: string, error: any);
}