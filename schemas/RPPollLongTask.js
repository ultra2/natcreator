var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPPollLongTask = new Schema({ 
		taskName: { type: String }
});
exports.RPPollLongTask.plugin(commonPlugin);
