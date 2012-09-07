var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPPushGenerator = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,generatorId: { type: String }
});
exports.RPPushGenerator.plugin(commonPlugin);
