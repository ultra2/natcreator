var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RequestObject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
