(function () {
    angular.module('momentousTest').directive('mtFormControlSelect', mtFormControlSelect);

    mtFormControlSelect.$inject = [];

    function mtFormControlSelect() {
        var directive: angular.IDirective = {};

        directive.restrict = 'E';
        directive.templateUrl = 'app/shared/form-controls/form-control-select.view.html';
        directive.scope = {
            name: '@',
            label: '@',
            required: '=',
            model: '=',
            field: '='
        };

        return directive;
    }
})