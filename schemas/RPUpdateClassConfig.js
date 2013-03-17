var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var RPUpdateClassConfig = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,classId: { type: String }
		,name: { type: String }
		,newName: { type: String }
		,newValues: { type: mongoose.Schema.Types.Mixed }
		,newDefaultValue: { type: mongoose.Schema.Types.Mixed }
		,newNotAccepted: { type: mongoose.Schema.Types.Mixed }
		,newDependency: { type: Boolean }
		,newHidden: { type: Boolean }
		,newCommon: { type: Boolean, default: 'true' }
		,newParams: { type: mongoose.Schema.Types.Mixed }
		,newTypes: { type: mongoose.Schema.Types.Mixed }
		,newReftoGetValues: { type: mongoose.Schema.Types.Mixed }
		,newReftoGetValue: { type: mongoose.Schema.Types.Mixed }
		,newRefType: { type: String }
});

exports.RPUpdateClassConfig = RPUpdateClassConfig;
