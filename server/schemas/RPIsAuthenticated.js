var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPIsAuthenticated = Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.RPIsAuthenticated.plugin(commonPlugin);
