var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RGSetupGithubCallback = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,code: { type: String }
});
