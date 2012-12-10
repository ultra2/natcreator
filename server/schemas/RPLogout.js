var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPLogout = Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.RPLogout.plugin(commonPlugin);
