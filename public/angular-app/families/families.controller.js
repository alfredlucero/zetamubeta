angular.module('zmbApp').controller('FamiliesController', FamiliesController);

function FamiliesController(){
	var vm = this;
	vm.tab = 1;

  vm.setTab = function (tabId) {
      vm.tab = tabId;
  };

  vm.isSet = function (tabId) {
      return vm.tab === tabId;
  };
}