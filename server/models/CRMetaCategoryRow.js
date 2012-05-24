var CRMetaCategoryRowSchema = new Schema({ 
 	 	 _id: { type: String }
 	 	 ,parentId: { type: String }
 	 	 ,depth: { type: Number }
 	 	 ,leaf: { type: Boolean }
 	 	 ,index: { type: Number }
 });
 mongoose.model('CRMetaCategoryRow', CRMetaCategoryRowSchema);
 