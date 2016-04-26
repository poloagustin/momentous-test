(function () {
    angular.module('momentousTest').directive('mtFormControlErrorMaxLength', mtFormControlErrorMaxLength);

    mtFormControlErrorMaxLength.$inject = [];

    function mtFormControlErrorMaxLength(): angular.IDirective {
        var directive: angular.IDirective = {};

        directive.restrict = 'E';
        directive.templateUrl = 'app/shared/form-control-errors/form-control-error-max-length.view.html';
        directive.scope = {
            label: '=',
            maxLength: '=',
            field: '='
        };

        return directive;
    }
} ());