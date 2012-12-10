var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPCloseProject = Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.RPCloseProject.plugin(commonPlugin);
