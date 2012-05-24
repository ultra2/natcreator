var FileSchema = new FileSchema({ 
 	 	 _id: { type: String }
 	 	 ,content: { type: String }
 	 	 ,name: { type: String }
 })
 mongoose.model('File', FileSchema)
 