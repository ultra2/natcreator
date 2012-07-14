var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RGSetupGithub = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
