var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPInstallGenerator = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.RPInstallGenerator.plugin(commonPlugin);
