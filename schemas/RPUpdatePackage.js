var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPUpdatePackage = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,packageId: { type: String }
});

exports.RPUpdatePackage = RPUpdatePackage;
