(function () {
    angular.module('momentousTest').directive('mtFormControlTextArea', mtFormControlTextArea);

    mtFormControlTextArea.$inject = [];

    function mtFormControlTextArea() {
        var directive: angular.IDirective = {};

        directive.restrict = 'E';
        directive.templateUrl = 'app/shared/form-controls/form-control-text-area.view.html';
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
