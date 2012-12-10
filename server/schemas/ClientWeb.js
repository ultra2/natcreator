var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.ClientWeb = Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.ClientWeb.plugin(commonPlugin);
