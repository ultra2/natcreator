var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var RGResetPassword = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,key: { type: String }
});

exports.RGResetPassword = RGResetPassword;
