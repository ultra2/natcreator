var mongoose = require('mongoose');

exports.CRMetaRowSchema = new mongoose.Schema({ 
		_id: { type: String }
		,parentId: { type: String }
		,depth: { type: Number }
		,leaf: { type: Boolean }
		,index: { type: Number }
});
