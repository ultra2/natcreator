var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
var Comment = require('../schemas/Comment.js').Comment;

exports.BlogPost = new Schema({ 
		_id: Schema.ObjectId
		,author_id: { type: String, ref: 'User' }
		,title: { type: String }
		,body: { type: String }
		,date: { type: Date, default: 'Fri Apr 27 2012 00:00:00 GMT+0200 (Central Europe Daylight Time)' }
		,comments: [Comment]
});
