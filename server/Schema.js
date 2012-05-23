var SchemaSchema = new SchemaSchema({ 
 	 	 isHierarchy: { type: Boolean }
 	 	 ,parentId: { type: String }
 	 	 ,leaf: { type: Boolean }
 	 	 ,depth: { type: Number }
 	 	 ,index: { type: Number }
 	 	 ,name: { type: String }
 	 	 ,strParam1: { type: String }
 })
 mongoose.model('Schema', SchemaSchema)
 