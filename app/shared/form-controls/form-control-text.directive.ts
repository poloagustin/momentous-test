(function () {
    angular.module('momentousTest').directive('mtFormControlText', mtFormControlText);

    mtFormControlText.$inject = [];

    function mtFormControlText() {
        var directive: angular.IDirective = {};

        directive.restrict = 'E';
        directive.templateUrl = 'app/shared/form-controls/form-control-text.view.html';
        directive.scope = {
            name: '@',
            label: '@',
            required: '=',
            maxLength: '=',
            model: '=',
            field: '='
        };

        return directive;
    }
} ());
