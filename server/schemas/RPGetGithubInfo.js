var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RPGetGithubInfo = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
