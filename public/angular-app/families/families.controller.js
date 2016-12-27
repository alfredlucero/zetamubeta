angular.module('zmbApp').controller('FamiliesController', FamiliesController);

function FamiliesController($scope){
	var vm = this;
	vm.tab = 0;
	vm.familyTrees = [
		{
			"name": "Darwin Arayata",
			"type": "brother",
			"children": [
				{
					"name": "Christopher Raymond Pettigrew",
					"type": "brother",
					"children": [
						{
							"name": "Dennis Tran",
							"type": "brother",
							"children": [
								{
									"name": "Gerald Poblete",
									"type": "brother",
									"children": []
								},
								{
									"name": "Gerome Viray",
									"type": "brother",
									"children": [
										{
											"name": "Ronnel Vincent Valenzuela",
											"type": "brother",
											"children": [
												{
													"name": "Edgar Rayos Del Sol Jr.",
													"type": "brother",
													"children": [
														{
															"name": "Alexander John Cainglet",
															"type": "brother",
															"children": [
																{
																	"name": "Brian Pham",
																	"type": "brother",
																	"children": []
																}
															]
														},
														{
															"name": "RV Austria",
															"type": "brother",
															"children": []
														}
													]
												},
												{
													"name": "Gereme Viray",
													"type": "brother",
													"children": [
														{
															"name": "Eric Nguyen",
															"type": "brother",
															"children": []
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					"name": "Michael Mendoza",
					"type": "brother",
					"children": [
						{
							"name": "Kameron Anderson",
							"type": "brother",
							"children": []
						},
						{
							"name": "Phillip Chu",
							"type": "brother",
							"children": [
								{
									"name": "Patrick Vitug",
									"type": "brother",
									"children": []
								}
							]
						}
					]
				}
		  ]
		},
		{
			"name": "Jibram Martinez",
			"type": "brother",
			"children": [
				{
					"name": "Jonathan Kom",
					"type": "brother",
					"children": []
				}
			]
		},
		{
			"name": "NA",
			"type": "brother",
			"children": []
		},
		{
			"name": "Stephen Le",
			"type": "brother",
			"children": []
		},
		{
			"name": "Ferdinand Lucero Jr.",
			"type": "brother",
			"children": []
		},
		{
			"name": "Patrick Molina",
			"type": "brother",
			"children": []
		},
		{
			"name": "Eric Margallo",
			"type": "brother",
			"children": []
		},
		{
			"name": "Linh Tran",
			"type": "brother",
			"children": []
		}
	];

	$scope.familyTree = vm.familyTrees[0];

  vm.setTab = function (tabId) {
      vm.tab = tabId;
      $scope.familyTree = vm.familyTrees[tabId];
      console.log($scope.familyTree);
  };

  vm.isSet = function (tabId) {
      return vm.tab === tabId;
  };
}