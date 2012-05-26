var mongoose = require('mongoose');

exports.CRMetaCategoryRowSchema = new mongoose.Schema({ 
	 	 _id: { type: String }
	 	 ,parentId: { type: String }
	 	 ,depth: { type: Number }
	 	 ,leaf: { type: Boolean }
	 	 ,index: { type: Number }
});
