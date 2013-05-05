var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RGAuthGoogle = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});

exports.RGAuthGoogle = RGAuthGoogle;
