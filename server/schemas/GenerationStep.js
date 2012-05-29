var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.GenerationStep = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
		,modified: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,generator_id: { type: String, ref: 'Generator' }
		,path: { type: String }
		,projectSetting_id: { type: String, ref: 'ProjectSetting' }
		,deleteDirectory: { type: Boolean }
		,active: { type: Boolean }
		,params: { type: String }
});

exports.DataProperty.plugin(commonPlugin);
