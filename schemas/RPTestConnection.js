var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPTestConnection = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,url: { type: String }
});

exports.RPTestConnection = RPTestConnection;
