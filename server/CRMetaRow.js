var CRMetaRowSchema = new CRMetaRowSchema({ 
 	 	 parentId: { type: String }
 	 	 ,depth: { type: Number }
 	 	 ,leaf: { type: Boolean }
 	 	 ,index: { type: Number }
 })
 mongoose.model('CRMetaRow', CRMetaRowSchema)
 