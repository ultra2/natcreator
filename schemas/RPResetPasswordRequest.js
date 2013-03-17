var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var RPResetPasswordRequest = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,email: { type: String }
});

exports.RPResetPasswordRequest = RPResetPasswordRequest;
