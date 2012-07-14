var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.PMRegistration = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,username: { type: String }
		,passwordSalt: { type: String }
		,passwordHash: { type: String }
		,email: { type: String }
});
