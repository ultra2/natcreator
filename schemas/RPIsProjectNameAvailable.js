var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPIsProjectNameAvailable = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,projectName: { type: String }
});

exports.RPIsProjectNameAvailable = RPIsProjectNameAvailable;
