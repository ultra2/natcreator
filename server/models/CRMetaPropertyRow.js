var CRMetaPropertyRowSchema = new Schema({ 
 	 	 _id: { type: String }
 	 	 ,parentId: { type: String }
 	 	 ,depth: { type: Number }
 	 	 ,leaf: { type: Boolean }
 	 	 ,index: { type: Number }
 	 	 ,type: { type: String }
 	 	 ,value: { type: mongoose.Schema.Types.Mixed }
 });
 mongoose.model('CRMetaPropertyRow', CRMetaPropertyRowSchema);
 