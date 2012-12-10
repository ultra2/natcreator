var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPInstallGenerator = Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,sharedGeneratorId: { type: String }
});
exports.RPInstallGenerator.plugin(commonPlugin);
