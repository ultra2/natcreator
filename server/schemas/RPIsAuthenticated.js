var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RPIsAuthenticated = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
