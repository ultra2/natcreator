var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RGActivate = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,key: { type: String }
});

exports.RGActivate = RGActivate;
