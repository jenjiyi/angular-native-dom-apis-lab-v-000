function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ some.text }}</h3>',
				'<span>Click here to replace the text</span>',
			'</div>'
		].join(''),
		require: 'someDirective',
		controller: function() {
			this.status = 'Not clicked';
			this.text = 'Replace this text!';
		},
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {
			var replaceElem = elem[0].querySelector('h3');
			var clickElem = elem[0].querySelector('span');
			clickElem.addEventListener('click', function () {
				ctrl.status = 'Clicked!';
				replaceElem.textContent = "Thank you for clicking!";
				scope.$apply();
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
