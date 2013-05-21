var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPSendQuestion = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,subject: { type: String }
		,question: { type: String }
});

exports.RPSendQuestion = RPSendQuestion;
