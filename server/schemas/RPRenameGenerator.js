var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPRenameGenerator = Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,name: { type: String }
		,generatorId: { type: String }
});
exports.RPRenameGenerator.plugin(commonPlugin);
