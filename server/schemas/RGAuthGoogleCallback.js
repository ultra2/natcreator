var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RGAuthGoogleCallback = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
