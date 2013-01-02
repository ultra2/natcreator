var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPIsProjectNameAvailable = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,projectName: { type: String }
});
exports.RPIsProjectNameAvailable.plugin(commonPlugin);
