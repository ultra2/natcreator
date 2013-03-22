var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var RPLogin = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,username: { type: String }
		,password: { type: String }
		,rememberMe: { type: Boolean }
});

exports.RPLogin = RPLogin;
