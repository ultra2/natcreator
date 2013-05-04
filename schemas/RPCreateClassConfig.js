var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPCreateClassConfig = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,classId: { type: String }
		,name: { type: String }
		,types: { type: mongoose.Schema.Types.Mixed }
		,values: { type: mongoose.Schema.Types.Mixed }
		,defaultValue: { type: mongoose.Schema.Types.Mixed }
		,isAccepted: { type: mongoose.Schema.Types.Mixed }
		,dependency: { type: Boolean }
		,hidden: { type: Boolean }
		,common: { type: Boolean, default: 'true' }
		,params: { type: mongoose.Schema.Types.Mixed }
		,getValues: { type: mongoose.Schema.Types.Mixed }
		,getValue: { type: mongoose.Schema.Types.Mixed }
		,refType: { type: String }
});

exports.RPCreateClassConfig = RPCreateClassConfig;
