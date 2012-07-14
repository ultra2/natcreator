var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RequestPost = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
