var CRMetaRowSchema = new Schema({ 
 	 	 _id: { type: String }
 	 	 ,parentId: { type: String }
 	 	 ,depth: { type: Number }
 	 	 ,leaf: { type: Boolean }
 	 	 ,index: { type: Number }
 });
 mongoose.model('CRMetaRow', CRMetaRowSchema);
 