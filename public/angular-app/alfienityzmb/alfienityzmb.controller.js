angular.module('zmbApp').controller('AlfienityZmbController', AlfienityZmbController);

function AlfienityZmbController($route, brotherDataFactory) {
	var vm = this;
	vm.addBrotherData = {};
	vm.editBrotherNumber = 1;
	vm.editBrotherData = {};
	vm.editBrotherDeleted = false;
	vm.editBrotherUpdated = false;

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
	
				$route.reload();
			}).catch(function(error) {
				console.log(error);
			});
		} else {
			vm.addBrotherSubmitted = true;
		}

	};

	vm.displayBrother = function() {
		brotherDataFactory.brotherDisplay(vm.editBrotherNumber).then(function(response) {
			vm.editBrotherData = response;
		});
	}

	vm.deleteBrother = function() {
		brotherDataFactory.deleteBrother(vm.editBrotherNumber).then(function(response) {
			vm.editBrotherData = response;

			vm.editBrotherDeleted = true;
		}).catch(function(error) {
			console.log(error);
			vm.editBrotherDeleted = false;
		});
	};

	vm.updateBrother = function() {
		var putData = {
			_id : Number(vm.editBrotherData._id),
			name : vm.editBrotherData.name,
			aka : vm.editBrotherData.aka,
			className : vm.editBrotherData.className,
			crossed : vm.editBrotherData.crossed,
			family : vm.editBrotherData.family
		};
		brotherDataFactory.updateBrother(putData._id, putData).then(function(response) {
			vm.editBrotherData = response;

			vm.editBrotherUpdated = true;
		}).catch(function(error) {
			console.log(error);
			vm.editBrotherUpdated = false;
		});
	};
}