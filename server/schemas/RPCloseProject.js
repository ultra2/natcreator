var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RPCloseProject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
