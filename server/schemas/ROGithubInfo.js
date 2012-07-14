var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.ROGithubInfo = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,isAuthorized: { type: Boolean }
		,username: { type: String }
});
