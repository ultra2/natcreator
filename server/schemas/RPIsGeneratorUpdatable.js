var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPIsGeneratorUpdatable = Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,generatorId: { type: String }
});
exports.RPIsGeneratorUpdatable.plugin(commonPlugin);
