var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPDeleteClassConfig = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,classId: { type: String }
		,name: { type: String }
});

exports.RPDeleteClassConfig = RPDeleteClassConfig;
