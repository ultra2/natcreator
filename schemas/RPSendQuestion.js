var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPSendQuestion = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,subject: { type: String }
		,question: { type: String }
});
exports.RPSendQuestion.plugin(commonPlugin);
