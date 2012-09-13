var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPAcquireGenerator = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,generatorId: { type: String }
});
exports.RPAcquireGenerator.plugin(commonPlugin);
