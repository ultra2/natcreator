var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPIsAccountAvailable = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,username: { type: String }
});

exports.RPIsAccountAvailable = RPIsAccountAvailable;
