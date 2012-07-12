var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.User = new Schema({ 
		_id: Schema.ObjectId
		,name: { type: String }
});
