var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPSetHerokuApiKey = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,herokuApiKey: { type: String }
});
exports.RPSetHerokuApiKey.plugin(commonPlugin);
