var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RequestGet = Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.RequestGet.plugin(commonPlugin);
