var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RequestPost = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.RequestPost.plugin(commonPlugin);
