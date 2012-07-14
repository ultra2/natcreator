var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RPIsAccountAvailable = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,username: { type: String }
});
