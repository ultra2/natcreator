var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.CDManagerMenu = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,parentId: { type: String }
		,depth: { type: Number }
		,leaf: { type: Boolean }
		,index: { type: Number }
		,name: { type: String }
});
