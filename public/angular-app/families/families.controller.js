angular.module('zmbApp').controller('FamiliesController', FamiliesController);

function FamiliesController($scope){
	var vm = this;
	vm.tab = 0;
	vm.familyTrees = [
		{
			"name": "Darwin Arayata",
			"parent": "null",
			"type": "brother",
			"children": [
				{
					"name": "Christopher Raymond Pettigrew",
					"parent": "Darwin Arayata",
					"type": "brother",
					"children": [
						{
							"name": "Dennis Tran",
							"parent": "Christopher Raymond Pettigrew",
							"type": "brother",
							"children": [
								{
									"name": "Gerald Poblete",
									"parent": "Dennis Tran",
									"type": "brother",
									"children": []
								},
								{
									"name": "Gerome Viray",
									"parent": "Dennis Tran",
									"type": "brother",
									"children": [
										{
											"name": "Ronnel Vincent Valenzuela",
											"parent": "Gerome Viray",
											"type": "brother",
											"children": [
												{
													"name": "Edgar Rayos Del Sol Jr.",
													"parent": "Ronnel Vincent Valenzuela",
													"type": "brother",
													"children": [
														{
															"name": "Alexander John Cainglet",
															"parent": "Edgar Rayos Del Sol Jr.",
															"type": "brother",
															"children": [
																{
																	"name": "Brian Pham",
																	"parent": "Alexander John Cainglet",
																	"type": "brother",
																	"children": []
																}
															]
														},
														{
															"name": "RV Austria",
															"parent": "Edgar Rayos Del Sol Jr.",
															"type": "brother",
															"children": []
														},
														{
															"name": "Lily Trinh",
															"parent": "Edgar Rayos Del Sol Jr.",
															"type": "queen",
															"children": []
														}
													]
												},
												{
													"name": "Gereme Viray",
													"parent": "Ronnel Vincent Valenzuela",
													"type": "brother",
													"children": [
														{
															"name": "Eric Nguyen",
															"parent": "Gereme Viray",
															"type": "brother",
															"children": []
														},
														{
															"name": "Celine Truong",
															"parent": "Gereme Viray",
															"type": "queen",
															"children": []
														}
													]
												},
												{
													"name": "SJ Lee",
													"parent": "Ronnel Vincent Valenzuela",
													"type": "queen",
													"children": []
												},
												{
													"name": "Ryanna Declines",
													"parent": "Ronnel Vincent Valenzuela",
													"type": "queen",
													"children": []
												},
												{
													"name": "Janell Orencia Ignacio",
													"parent": "Ronnel Vincent Valenzuela",
													"type": "queen",
													"children": []
												}
											]
										},
										{
											"name": "Trisha Nguyen",
											"parent": "Gerome Viray",
											"type": "queen",
											"children": []
										},
										{
											"name": "Kimberly Tan",
											"parent": "Gerome Viray",
											"type": "queen",
											"children": []
										}
									]
								},
								{
									"name": "Mary Grace Jalandoni",
									"parent": "Dennis Tran",
									"type": "queen",
									"children": []
								}
							]
						},
						{
							"name": "Elka Lacno",
							"parent": "Chrisopher Raymond Pettigrew",
							"type": "queen",
							"children": []
						}
					]
				},
				{
					"name": "Michael Mendoza",
					"parent": "Darwin Arayata",
					"type": "brother",
					"children": [
						{
							"name": "Kameron Anderson",
							"parent": "Michael Mendoza",
							"type": "brother",
							"children": [
								{
									"name": "Stacey Moreno",
									"parent": "Kameron Anderson",
									"type": "queen",
									"children": []
								},
								{
									"name": "Teodora Garcia",
									"parent": "Kameron Anderson",
									"type": "queen",
									"children": []
								}
							]	
						},
						{
							"name": "Phillip Chu",
							"parent": "Michael Mendoza",
							"type": "brother",
							"children": [
								{
									"name": "Patrick Vitug",
									"parent": "Phillip Chu",
									"type": "brother",
									"children": []
								}
							]
						},
						{
							"name": "Rachel Tacsuan",
							"parent": "Michael Mendoza",
							"type": "queen",
							"children": []
						}
					]
				},
				{
					"name": "Kyrstin Leigh Occiano",
					"parent": "Darwin Arayata",
					"type": "queen",
					"children": []
				},
				{
					"name": "Malynda Banaga",
					"parent": "Darwin Arayata",
					"type": "queen",
					"children": []
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
				},
				{
					"name": "Zhamir Pascual",
					"type": "brother",
					"children": []
				}
			]
		},
		{
			"name": "NA",
			"type": "brother",
			"children": [
				{
					"name": "Efrain Franco",
					"type": "brother",
					"children": []
				},
				{
					"name": "Gerard Del Rosario",
					"type": "brother",
					"children": []
				}
			]
		},
		{
			"name": "Stephen Le",
			"type": "brother",
			"children": [
				{
					"name": "Jairus O'Lawrence",
					"type": "brother",
					"children": []
				},
				{
					"name": "Jason Tallo",
					"type": "brother",
					"children": []
				}
			]
		},
		{
			"name": "Ferdinand Lucero Jr.",
			"type": "brother",
			"children": [
				{
					"name": "Diego Del Campo",
					"type": "brother",
					"children": []
				}
			]
		},
		{
			"name": "Patrick Molina",
			"type": "brother",
			"children": [
				{
					"name": "Marvin Peredo",
					"type": "brother",
					"children": []
				}
			]
		},
		{
			"name": "Eric Margallo",
			"type": "brother",
			"children": [
				{
					"name": "Richard Cajigal",
					"type": "brother",
					"children": []
				}
			]
		},
		{
			"name": "Linh Tran",
			"type": "brother",
			"children": [
				{
					"name": "Dale Tallo",
					"type": "brother",
					"children": []
				}
			]
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