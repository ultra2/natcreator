var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RGAuthGoogleCallback = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.RGAuthGoogleCallback.plugin(commonPlugin);
