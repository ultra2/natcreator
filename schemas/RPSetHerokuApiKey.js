var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPSetHerokuApiKey = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,herokuApiKey: { type: String }
});

exports.RPSetHerokuApiKey = RPSetHerokuApiKey;
