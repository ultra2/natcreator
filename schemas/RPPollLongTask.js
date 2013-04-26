var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPPollLongTask = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,taskName: { type: String }
});

exports.RPPollLongTask = RPPollLongTask;
