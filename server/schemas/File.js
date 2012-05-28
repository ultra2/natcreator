var mongoose = require('mongoose');

exports.File = new mongoose.Schema({ 
		_id: { type: String }
		,content: { type: String }
		,name: { type: String }
});
