angular.module('zmbApp').controller('AlfienityZmbController', AlfienityZmbController);

function AlfienityZmbController($route, brotherDataFactory) {
	var vm = this;
	vm.addBrotherData = {};
	vm.addBrother = function() {
		console.log(vm.addBrotherData);
		var postData = {
			_id : Number(vm.addBrotherData._id),
			name : vm.addBrotherData.name,
			aka : vm.addBrotherData.aka,
			className : vm.addBrotherData.className,
			crossed : vm.addBrotherData.crossed,
			family : vm.addBrotherData.family
		};

		if (vm.addBrotherForm.$valid) {
			brotherDataFactory.postBrother(postData).then(function(response) {
				console.log(response);
				$route.reload();
			}).catch(function(error) {
				console.log(error);
			});
		} else {
			vm.addBrotherSubmitted = true;
		}

	}
}