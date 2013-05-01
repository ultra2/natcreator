var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPChangeType = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,classId: { type: String }
		,metaNodeId: { type: String }
		,newTypeId: { type: String }
});

exports.RPChangeType = RPChangeType;
