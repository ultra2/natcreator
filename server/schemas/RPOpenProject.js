var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RPOpenProject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,projectId: { type: String }
		,mode: { type: String }
});
