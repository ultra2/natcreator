var mongoose = require('mongoose');

exports.User = new mongoose.Schema({ 
		_id: ObjectId
		,name: { type: String }
});
