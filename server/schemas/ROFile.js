var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.ROFile = Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,name: { type: String }
		,content: { type: String }
});
exports.ROFile.plugin(commonPlugin);
