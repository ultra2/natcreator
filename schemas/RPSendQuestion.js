var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPSendQuestion = new Schema({ 
		subject: { type: String }
		,question: { type: String }
});
exports.RPSendQuestion.plugin(commonPlugin);
