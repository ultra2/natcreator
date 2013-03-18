var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var RPIsProjectNameAvailable = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,projectName: { type: String }
});

exports.RPIsProjectNameAvailable = RPIsProjectNameAvailable;
