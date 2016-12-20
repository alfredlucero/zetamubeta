angular.module('zmbApp').controller('BrothersController', BrothersController);


function BrothersController(brotherDataFactory) {
	var vm = this;
	vm.filterBrothers = '';
	brotherDataFactory.brothersList().then(function(response) {
		console.log(response);
		vm.brothers = response;
	});
}