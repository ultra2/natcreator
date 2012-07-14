var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RPLogout = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
