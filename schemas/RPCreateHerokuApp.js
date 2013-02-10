var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPCreateHerokuApp = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.RPCreateHerokuApp.plugin(commonPlugin);
