var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPModifyPackage = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,packageId: { type: String }
		,autoUpdate: { type: Boolean }
});

exports.RPModifyPackage = RPModifyPackage;
