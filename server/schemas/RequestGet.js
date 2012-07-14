var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RequestGet = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
