var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPUpdateClassConfig = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,classId: { type: String }
		,name: { type: String }
		,newName: { type: String }
		,newValues: { type: mongoose.Schema.Types.Mixed }
		,newDefaultValue: { type: mongoose.Schema.Types.Mixed }
		,newIsAccepted: { type: mongoose.Schema.Types.Mixed }
		,newDependency: { type: Boolean }
		,newHidden: { type: Boolean }
		,newCommon: { type: Boolean, default: 'true' }
		,newParams: { type: mongoose.Schema.Types.Mixed }
		,newTypes: { type: mongoose.Schema.Types.Mixed }
		,newGetValues: { type: mongoose.Schema.Types.Mixed }
		,newGetValue: { type: mongoose.Schema.Types.Mixed }
		,newRefType: { type: String }
});

exports.RPUpdateClassConfig = RPUpdateClassConfig;
