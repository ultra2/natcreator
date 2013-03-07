var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPGetResourceFile = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,url: { type: String }
});
exports.RPGetResourceFile.plugin(commonPlugin);
