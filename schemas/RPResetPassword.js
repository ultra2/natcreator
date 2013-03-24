var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var RPResetPassword = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,pinCode: { type: String }
		,username: { type: String }
		,newPassword: { type: String }
		,confirmNewPassword: { type: String }
});

exports.RPResetPassword = RPResetPassword;
