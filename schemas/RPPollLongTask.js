var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPPollLongTask = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,taskName: { type: String }
});
exports.RPPollLongTask.plugin(commonPlugin);
