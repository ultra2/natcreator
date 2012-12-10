var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.ClientDesigner = Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.ClientDesigner.plugin(commonPlugin);
