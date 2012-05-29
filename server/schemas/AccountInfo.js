var mongoose = require('mongoose');

exports.AccountInfo = new mongoose.Schema({ 
		_id: { type: String }
		,username: { type: String }
		,hasGithubToken: { type: Boolean }
});
