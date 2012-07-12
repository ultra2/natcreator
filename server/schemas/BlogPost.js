var mongoose = require('mongoose');
var Comment = require('../schemas/Comment.js').Comment;

exports.BlogPost = new mongoose.Schema({ 
		_id: ObjectId
		,author_id: { type: String, ref: 'User' }
		,title: { type: String }
		,body: { type: String }
		,date: { type: Date, default: 'Fri Apr 27 2012 00:00:00 GMT+0200 (Central Europe Daylight Time)' }
		,comments: [Comment]
});
