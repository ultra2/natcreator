var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.CDFrameworkItem = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,name: { type: String }
		,displayName: { type: String }
});
