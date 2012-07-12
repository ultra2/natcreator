var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.Comment = new Schema({ 
		_id: Schema.ObjectId
		,title: { type: String }
		,body: { type: String }
		,date: { type: Date, default: 'Fri Apr 27 2012 00:00:00 GMT+0200 (Central Europe Daylight Time)' }
});
