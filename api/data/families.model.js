var mongoose = require('mongoose');

var bigLittleSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	littleBros : {
		type : [String],
		required : true
	},
	littleSises : {
		type : [String],
		required : true
	}
});

var familySchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	founder : {
		type : String,
		required : true
	},
	colors : {
		type : [String],
		required : true
	},
	tree : {
		type : [bigLittleSchema]
	}
});

// Model, ModelSchema, Collection 
mongoose.model('Family', familySchema, 'families');
