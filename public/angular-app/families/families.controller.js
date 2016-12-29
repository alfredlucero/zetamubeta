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
			"parent": "null",
			"type": "brother",
			"children": [
				{
					"name": "Jonathan Kom",
					"parent": "Jibram Martinez",
					"type": "brother",
					"children": [
						{
							"name": "Darvell Valentine",
							"parent": "Jonathan Kom",
							"type": "brother",
							"children": [
								{
									"name": "Christian Gumacal",
									"parent": "Darvell Valentine",
									"type": "brother",
									"children": [
										{
											"name": "Alvin Delito",
											"parent": "Christian Gumacal",
											"type": "brother",
											"children": [
												{
													"name": "Jimmy Pham",
													"parent": "Alvin Delito",
													"type": "brother",
													"children": []
												},
												{
													"name": "Shaiyana Sam",
													"parent": "Alvin Delito",
													"type": "queen",
													"children": []
												}
											]
										},
										{
											"name": "Yaellie Deroca",
											"parent": "Christian Gumacal",
											"type": "queen",
											"children": []
										},
										{
											"name": "Leilani Santos",
											"parent": "Christian Gumacal",
											"type": "queen",
											"children": []
										}
									]
								},
								{
									"name": "Sara Angus",
									"parent": "Darvell Valentine",
									"type": "queen",
									"children": []
								},
								{
									"name": "Kathleen Khem",
									"parent": "Darvell Valentine",
									"type": "queen",
									"children": []
								}
							]
						},
						{
							"name": "Amanda Cruz",
							"parent": "Jonathan Kom",
							"type": "queen",
							"children": []
						},
						{
							"name": "Ohlene Lacno",
							"parent": "Jonathan Kom",
							"type": "queen",
							"children": []
						}
					]
				},
				{
					"name": "Zhamir Pascual",
					"parent": "Jibram Martinez",
					"type": "brother",
					"children": [
						{
							"name": "Mari Elefante",
							"parent": "Zhamir Pascual",
							"type": "queen",
							"children": []
						}
					]
				},
				{
					"name": "Matthew Gozzip",
					"parent": "Jibram Martinez",
					"type": "brother",
					"children": []
				},
				{
					"name": "Abby Reyes",
					"parent": "Jibram Martinez",
					"type": "queen",
					"children": []
				},
				{
					"name": "Michelle Christine Nguyen",
					"parent": "Jibram Martinez",
					"type": "queen",
					"children": []
				},
				{
					"name": "Ashley Cruz",
					"parent": "Jibram Martinez",
					"type": "queen",
					"children": []
				},
				{
					"name": "Clarice Guico",
					"parent": "Jibram Martinez",
					"type": "queen",
					"children": []
				}
			]
		},
		{
			"name": "NA",
			"parent": "null",
			"type": "brother",
			"children": [
				{
					"name": "Efrain Franco",
					"parent": "NA",
					"type": "brother",
					"children": [
						{
							"name": "Mark Thomas Labrador Carmona",
							"parent": "Efrain Franco",
							"type": "brother",
							"children": [
								{
									"name": "Eric Azpeitia",
									"parent": "Mark Thomas Labrador Carmona",
									"type": "brother",
									"children": [
										{
											"name": "Joel Morales",
											"parent": "Eric Azpeitia",
											"type": "brother",
											"children": []
										},
										{
											"name": "John Saluta",
											"parent": "Eric Azpeitia",
											"type": "brother",
											"children": [
												{
													"name": "Kenny Phin",
													"parent": "John Saluta",
													"type": "brother",
													"children": []
												},
												{
													"name": "Emil Evangelista",
													"parent": "John Saluta",
													"type": "brother",
													"children": [
														{
															"name": "Victor Angeles",
															"parent": "Emil Evangelista",
															"type": "brother",
															"children": []
														}
													]
												},
												{
													"name": "Jeffrey Dang",
													"parent": "John Saltua",
													"type": "brother",
													"children": []
												},
												{
													"name": "Kelly Xu",
													"parent": "John Saluta",
													"type": "queen",
													"children": []
												}
											]
										},
										{
											"name": "Adrianna Ramos",
											"parent": "Eric Azpeitia",
											"type": "queen",
											"children": []
										},
										{
											"name": "Pauline Salguero",
											"parent": "Eric Azpeitia",
											"type": "queen",
											"children": []
										},
										{
											"name": "Hilary Nguyen",
											"parent": "Eric Azpeitia",
											"type": "queen",
											"children": []
										},
										{
											"name": "Nhi Nguyen",
											"parent": "Eric Azpeitia",
											"type": "queen",
											"children": []
										}
									]
								},
								{
									"name": "NA",
									"parent": "Mark Thomas Labrador Carmona",
									"type": "brother",
									"children": [
										{
											"name": "Emmanuel Concepcion",
											"parent": "NA",
											"type": "brother",
											"children": [
												{
													"name": "Alfred Lucero",
													"parent": "Emmanuel Concepcion",
													"type": "brother",
													"children": [
														{
															"name": "Airelle Javelosa",
															"parent": "Alfred Lucero",
															"type": "queen",
															"children": []
														}
													]
												}
											]
										},
										{
											"name": "Jeremy Basuga",
											"parent": "NA",
											"type": "brother",
											"children": [
												{
													"name": "Chris John Deroca",
													"parent": "Jeremy Basuga",
													"type": "brother",
													"children": [
														{
															"name": "Clapton Nguyen",
															"parent": "Chris John Deroca",
															"type": "brother",
															"children": []
														}
													]
												},
												{
													"name": "Lavonne Danganan",
													"parent": "Jeremy Basuga",
													"type": "queen",
													"children": []
												}
											]
										},
										{
											"name": "Stephanie To",
											"parent": "NA",
											"type": "queen",
											"children": []
										}

									]
								},
								{
									"name": "Mark Onyx Deroca",
									"parent": "Mark Thomas Labrador Carmona",
									"type": "brother",
									"children": [
										{
											"name": "Julanda Al Mohd",
											"parent": "Mark Onyx Deroca",
											"type": "brother",
											"children": []
										}
									]
								},
								{
									"name": "Abby Bagsic",
									"parent": "Mark Thomas Labrador Carmona",
									"type": "queen",
									"children": []
								},
								{
									"name": "Kayla Huynh",
									"parent": "Mark Thomas Labrador Carmona",
									"type": "queen",
									"children": []
								},
								{
									"name": "Kimberly Trinidad",
									"parent": "Mark Thomas Labrador Carmona",
									"type": "queen",
									"children": []
								}
							]
						},
						{
							"name": "Amanda Asis",
							"parent": "Efrain Franco",
							"type": "queen",
							"children": []
						},
						{
							"name": "Lisa Sok",
							"parent": "Efrain Franco",
							"type": "queen",
							"children": []
						},
						{
							"name": "Mom Chhun",
							"parent": "Efrain Franco",
							"type": "queen",
							"children": []
						}
					]
				},
				{
					"name": "Gerard Del Rosario",
					"parent": "NA",
					"type": "brother",
					"children": [
						{
							"name": "Nicole Yadao",
							"parent": "Gerard Del Rosario",
							"type": "queen",
							"children": []
						}
					]
				},
				{
					"name": "Donna Penalba",
					"parent": "NA",
					"type": "queen",
					"children": []
				}
			]
		},
		{
			"name": "Stephen Le",
			"parent": "null",
			"type": "brother",
			"children": [
				{
					"name": "Jairus O'Lawrence",
					"parent": "Stephen Le",
					"type": "brother",
					"children": [
						{
							"name": "Arturo Acuna",
							"parent": "Jairus O'Lawrence",
							"type": "brother",
							"children": [
								{
									"name": "Joel Barcelon",
									"parent": "Arturo Acuna",
									"type": "brother",
									"children": []
								}
							]
						}
					]
				},
				{
					"name": "Jason Tallo",
					"parent": "Stephen Le",
					"type": "brother",
					"children": [
						{
							"name": "Justin Javillonar",
							"parent": "Jason Tallo",
							"type": "brother",
							"children": [
								{
									"name": "Brandon Tran",
									"parent": "Justin Javillonar",
									"type": "brother",
									"children": [
										{
											"name": "Lorna Nguyen",
											"parent": "Brandon Tran",
											"type": "queen",
											"children": []
										}
									]
								},
								{
									"name": "Austin Duran",
									"parent": "Justin Javillonar",
									"type": "brother",
									"children": [
										{
											"name": "Anthony Estalilla",
											"parent": "Austin Duran",
											"type": "brother",
											"children": []
										},
										{
											"name": "Christianne Batol",
											"parent": "Austin Duran",
											"type": "queen",
											"children": []
										}
									]
								},
								{
									"name": "Catherine Dimapilis",
									"parent": "Justin Javillonar",
									"type": "queen",
									"children": []
								},
								{
									"name": "Bernadette Tomas",
									"parent": "Justin Javillonar",
									"type": "queen",
									"children": []
								},
								{
									"name": "Jessica Joe",
									"parent": "Justin Javillonar",
									"type": "queen",
									"children": []
								}
							]
						},
						{
							"name": "Derrick Harding",
							"parent": "Jason Tallo",
							"type": "brother",
							"children": [
								{
									"name": "Brian Om",
									"parent": "Derrick Harding",
									"type": "brother",
									"children": []
								},
								{
									"name": "Jonas Armas",
									"parent": "Derrick Harding",
									"type": "brother",
									"children": []
								},
								{
									"name": "Sheynne Cordova",
									"parent": "Derrick Harding",
									"type": "queen",
									"children": []
								}
							]
						},
						{
							"name": "Jhay Um",
							"parent": "Jason Tallo",
							"type": "queen",
							"children": []
						},
						{
							"name": "Patricia Maramo",
							"parent": "Jason Tallo",
							"type": "queen",
							"children": []
						}
					]
				},
				{
					"name": "Lea Manalo",
					"parent": "Stephen Le",
					"type": "queen",
					"children": []
				},
				{
					"name": "Tam Le",
					"parent": "Stephen Le",
					"type": "queen",
					"children": []
				},
				{
					"name": "Jenny Nguyen",
					"parent": "Stephen Le",
					"type": "queen",
					"children": []
				}
			]
		},
		{
			"name": "Ferdinand Lucero Jr.",
			"parent": "null",
			"type": "brother",
			"children": [
				{
					"name": "Diego Del Campo",
					"parent": "Ferdinand Lucero Jr.",
					"type": "brother",
					"children": [
						{
							"name": "Derek Yi",
							"parent": "Diego Del Campo",
							"type": "brother",
							"children": [
								{
									"name": "Gavin Thomas Gordon Topper",
									"parent": "Derek Yi",
									"type": "brother",
									"children": [
										{
											"name": "Irwinn Garcia",
											"parent": "Gavin Thomas Gordon Topper",
											"type": "brother",
											"children": [
												{
													"name": "Brandon Abrajan",
													"parent": "Irwinn Garcia",
													"type": "brother",
													"children": [
														{
															"name": "Casey Cajayon",
															"parent": "Brandon Abrajan",
															"type": "queen",
															"children": []
														}
													]
												},
												{
													"name": "Matthew Mata",
													"parent": "Irwinn Garcia",
													"type": "brother",
													"children": [
														{
															"name": "Michael Vo",
															"parent": "Matthew Mata",
															"type": "brother",
															"children": []
														},
														{
															"name": "Aaron Yabut",
															"parent": "Matthew Mata",
															"type": "brother",
															"children": []
														}
													]
												},
												{
													"name": "Brian Tan",
													"parent": "Irwinn Garcia",
													"type": "brother",
													"children": []
												},
												{
													"name": "Maddie Pile",
													"parent": "Irwinn Garcia",
													"type": "queen",
													"children": []
												}
											]
										},
										{
											"name": "Michael Quiros",
											"parent": "Gavin Thomas Gordon Topper",
											"type": "brother",
											"children": []
										},
										{
											"name": "Laila Masud",
											"parent": "Gavin Thomas Gordon Topper",
											"type": "queen",
											"children": []
										},
										{
											"name": "Isabelle Fidel",
											"parent": "Gavin Thomas Gordon Topper",
											"type": "queen",
											"children": []
										}
									]
								}
							]
						},
						{
							"name": "Joy Kim",
							"parent": "Diego Del Campo",
							"type": "queen",
							"children": []
						},
						{
							"name": "Grace Kim",
							"parent": "Diego Del Campo",
							"type": "queen",
							"children": []
						}
					]
				}
			]
		},
		{
			"name": "Patrick Molina",
			"parent": "null",
			"type": "brother",
			"children": [
				{
					"name": "Marvin Peredo",
					"parent": "Patrick Molina",
					"type": "brother",
					"children": [
						{
							"name": "Daryl Paz",
							"parent": "Marvin Peredo",
							"type": "brother",
							"children": [
								{
									"name": "Mark Marroquin",
									"parent": "Daryl Paz",
									"type": "brother",
									"children": [
										{
											"name": "Mathew Vincent",
											"parent": "Mark Marroquin",
											"type": "brother",
											"children": [
												{
													"name": "Jeancarlos Javier Morataya",
													"parent": "Mathew Vincent",
													"type": "brother",
													"children": [
														{
															"name": "Michelle Verzani",
															"parent": "Jeancarlos Javier Morataya",
															"type": "queen",
															"children": []
														}
													]
												},
												{
													"name": "Marissa Padilla",
													"parent": "Mathew Vincent",
													"type": "queen",
													"children": []
												}
											]
										},
										{
											"name": "Diana Trinh",
											"parent": "Mark Marroquin",
											"type": "queen",
											"children": []
										},
										{
											"name": "Tiffany Le",
											"parent": "Mark Marroquin",
											"type": "queen",
											"children": []
										}
									]
								},
								{
									"name": "Cindy Jimenez",
									"parent": "Daryl Paz",
									"type": "queen",
									"children": []
								}
							]
						},
						{
							"name": "Peter Cheng",
							"parent": "Marvin Peredo",
							"type": "brother",
							"children": [
								{
									"name": "NA",
									"parent": "Peter Cheng",
									"type": "brother",
									"children": [
										{
											"name": "Jasper Javier",
											"parent": "NA",
											"type": "brother",
											"children": [
												{
													"name": "Derek Do",
													"parent": "Jasper Javier",
													"type": "brother",
													"children": []
												},
												{
													"name": "Jenny Nguyen",
													"parent": "Jasper Javier",
													"type": "queen",
													"children": []
												}
											]
										}
									]
								},
								{
									"name": "Jeff Yee",
									"parent": "Peter Cheng",
									"type": "brother",
									"children": [
										{
											"name": "Patrick Monta",
											"parent": "Jeff Yee",
											"type": "brother",
											"children": [
												{
													"name": "Niguel Cher",
													"parent": "Patrick Monta",
													"type": "brother",
													"children": []
												}
											]
										}
									]
								},
								{
									"name": "Christina Ouk",
									"parent": "Peter Cheng",
									"type": "queen",
									"children": []
								}
							]
						},
						{
							"name": "Chrisantel Navio",
							"parent": "Marvin Peredo",
							"type": "queen",
							"children": []
						},
						{
							"name": "Christina Hung",
							"parent": "Marvin Peredo",
							"type": "queen",
							"children": []
						}
					]
				}
			]
		},
		{
			"name": "Eric Margallo",
			"parent": "null",
			"type": "brother",
			"children": [
				{
					"name": "Richard Cajigal",
					"parent": "Eric Margallo",
					"type": "brother",
					"children": [
						{
							"name": "Brian Columna",
							"parent": "Richard Cajigal",
							"type": "brother",
							"children": [
								{
									"name": "Daniel Tran",
									"parent": "Brian Columna",
									"type": "brother",
									"children": [
										{
											"name": "Phillip Yoo",
											"parent": "Daniel Tran",
											"type": "brother",
											"children": [
												{
													"name": "Sam Wang",
													"parent": "Phillip Yoo",
													"type": "brother",
													"children": [
														{
															"name": "Michael Ramillano",
															"parent": "Sam Wang",
															"type": "brother",
															"children": [
																{
																	"name": "Peter Hor",
																	"parent": "Michael Ramillano",
																	"type": "brother",
																	"children": []
																},
																{
																	"name": "Jailene Gaspar",
																	"parent": "Michael Ramillano",
																	"type": "queen",
																	"children": []
																}
															]
														},
														{
															"name": "Angelica Cadalin",
															"parent": "Sam Wang",
															"type": "queen",
															"children": []
														}
													]
												},
												{
													"name": "Vivian Tran",
													"parent": "Phillip Yoo",
													"type": "queen",
													"children": []
												}
											]
										},
										{
											"name": "Jocy Rivera",
											"parent": "Daniel Tran",
											"type": "queen",
											"children": []
										}
									]
								},
								{
									"name": "Chris Quirong",
									"parent": "Brian Columna",
									"type": "brother",
									"children": [
										{
											"name": "Queenie Kyrstal Orteza",
											"parent": "Chris Quirong",
											"type": "queen",
											"children": []
										}
									]
								},
								{
									"name": "Ariel Almodovar",
									"parent": "Brian Columna",
									"type": "queen",
									"children": []
								},
								{
									"name": "April Skiles",
									"parent": "Brian Columna",
									"type": "queen",
									"children": []
								},
								{
									"name": "Victoria Sea",
									"parent": "Brian Columna",
									"type": "queen",
									"children": []
								}
							]
						}
					]
				},
				{
					"name": "Leay Albanes",
					"parent": "Eric Margallo",
					"type": "queen",
					"children": []
				}
			]
		},
		{
			"name": "Linh Tran",
			"parent": "null",
			"type": "brother",
			"children": [
				{
					"name": "Dale Tallo",
					"parent": "null",
					"type": "brother",
					"children": [
						{
							"name": "Joseph Aquino",
							"parent": "Dale Tallo",
							"type": "brother",
							"children": [
								{
									"name": "Michael Nguyen",
									"parent": "Joseph Aquino",
									"type": "brother",
									"children": [
										{
											"name": "John Paul Rigonan",
											"parent": "Michael Nguyen",
											"type": "brother",
											"children": [
												{
													"name": "Matthew Yan",
													"parent": "John Paul Rigonan",
													"type": "brother",
													"children": [
														{
															"name": "Muath Almanthri",
															"parent": "Matthew Yan",
															"type": "brother",
															"children": []
														}
													]
												}
											]
										},
										{
											"name": "Justine Paige dela Rosa",
											"parent": "Michael Nguyen",
											"type": "queen",
											"children": []
										},
										{
											"name": "Joy Mallari",
											"parent": "Michael Nguyen",
											"type": "queen",
											"children": []
										}
									]
								},
								{
									"name": "Vincent Nguyen",
									"parent": "Joseph Aquino",
									"type": "brother",
									"children": []
								},
								{
									"name": "Anthony Chang",
									"parent": "Joseph Aquino",
									"type": "brother",
									"children": [
										{
											"name": "Ereyn Patricio",
											"parent": "Anthony Chang",
											"type": "queen",
											"children": []
										}
									]
								},
								{
									"name": "Samantha Villaverde",
									"parent": "Joseph Aquino",
									"type": "queen",
									"children": []
								}
							]
						},
						{
							"name": "Thy Phan",
							"parent": "Dale Tallo",
							"type": "queen",
							"children": []
						},
						{
							"name": "Melissa Trinidad",
							"parent": "Dale Tallo",
							"type": "queen",
							"children": []
						},
						{
							"name": "Lauren Ocampo",
							"parent": "Dale Tallo",
							"type": "queen",
							"children": []
						}
					]
				}
			]
		}
	];

	$scope.familyTree = vm.familyTrees[0];
	vm.familyTreeTitle = 'Flash';

  vm.setTab = function (tabId) {
      vm.tab = tabId;
      $scope.familyTree = vm.familyTrees[tabId];
      switch(tabId) {
      	case 0: 
      		vm.familyTreeTitle = 'Flash';
      		break;
      	case 1:
      		vm.familyTreeTitle = 'Mighty';
      		break;
      	case 2:
      		vm.familyTreeTitle = 'Elite';
      		break;
      	case 3:
      		vm.familyTreeTitle = 'Aro';
      		break;
      	case 4:
      		vm.familyTreeTitle = 'Flight';
      		break;
      	case 5:
      		vm.familyTreeTitle = 'Butterfly';
      		break;
      	case 6:
      		vm.familyTreeTitle = 'Flossy';
      		break;
      	case 7:
      		vm.familyTreeTitle = 'Fiesta';
      		break;
      }
  };

  vm.isSet = function (tabId) {
      return vm.tab === tabId;
  };
}