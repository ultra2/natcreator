var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPRegistration = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,username: { type: String }
		,email: { type: String }
		,password: { type: String }
});

exports.RPRegistration = RPRegistration;
