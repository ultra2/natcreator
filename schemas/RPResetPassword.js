var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPResetPassword = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,pinCode: { type: String }
		,username: { type: String }
		,newPassword: { type: String }
});

exports.RPResetPassword = RPResetPassword;
