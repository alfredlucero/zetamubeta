var mongoose = require('mongoose');

var brotherSchema = new mongoose.Schema({
	_id : {
		type : Number,
		required : true
	},
	name : {
		type : String,
		required : true
	},
	aka : { 
		type : String,
		required : true
	},
	className : {
		type : String,
		required : true
	},
	crossed : { 
		type : String,
		required : true
	},
	family : {
		type : String,
		required : true
	}
});

// Model, ModelSchema, Collection 
mongoose.model('Brother', brotherSchema, 'brothers');
