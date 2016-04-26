(function () {
    angular.module('momentousTest').directive('mtFormControlErrorRequired', mtFormControlErrorRequired);

    mtFormControlErrorRequired.$inject = [];

    function mtFormControlErrorRequired(): angular.IDirective {
        var directive: angular.IDirective = {};

        directive.restrict = 'E';
        directive.templateUrl = 'app/shared/form-control-errors/form-control-error-max-length.view.html';
        directive.scope = {
            label: '=',
            required: '=',
            field: '='
        };

        return directive;
    }
} ());