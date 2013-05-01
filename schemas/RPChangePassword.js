var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPChangePassword = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,currentPassword: { type: String }
		,newPassword: { type: String }
});

exports.RPChangePassword = RPChangePassword;
