var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');
var DataProperty = require('../schemas/DataProperty.js').DataProperty;

exports.Schema = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
		,modified: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,isHierarchy: { type: Boolean }
		,parentId: { type: String }
		,leaf: { type: Boolean }
		,depth: { type: Number }
		,index: { type: Number }
		,properties: [DataProperty]
		,name: { type: String }
		,strParam1: { type: String }
});

exports.DataProperty.plugin(commonPlugin);
