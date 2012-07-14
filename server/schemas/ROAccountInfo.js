var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.ROAccountInfo = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,username: { type: String }
		,hasGithubToken: { type: Boolean }
});
