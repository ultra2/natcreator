var mongoose = require('mongoose');
 
 exports.CRMetaPropertyRowSchema = new mongoose.Schema({ 
 	 	 _id: { type: String }
 	 	 ,parentId: { type: String }
 	 	 ,depth: { type: Number }
 	 	 ,leaf: { type: Boolean }
 	 	 ,index: { type: Number }
 	 	 ,type: { type: String }
 	 	 ,value: { type: mongoose.Schema.Types.Mixed }
 	 ,associations: [
 	 ]
 });
 