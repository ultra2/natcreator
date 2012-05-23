var StringPropertySchema = new StringPropertySchema({ 
 	 	 defaultValue: { type: String }
 	 	 ,minLength: { type: Number }
 	 	 ,maxLength: { type: String }
 	 	 ,vFormat: { type: String }
 })
 mongoose.model('StringProperty', StringPropertySchema)
 