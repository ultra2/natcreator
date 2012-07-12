var mongoose = require('mongoose');

exports.Comment = new mongoose.Schema({ 
		_id: ObjectId
		,title: { type: String }
		,body: { type: String }
		,date: { type: Date, default: 'Fri Apr 27 2012 00:00:00 GMT+0200 (Central Europe Daylight Time)' }
});
