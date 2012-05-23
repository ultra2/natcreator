var FileSchema = new FileSchema({ 
 	 	 content: { type: String }
 	 	 ,name: { type: String }
 })
 mongoose.model('File', FileSchema)
 