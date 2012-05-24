var RegistrationSchema = new RegistrationSchema({ 
 	 	 _id: { type: String }
 	 	 ,username: { type: String }
 	 	 ,email: { type: String }
 	 	 ,password: { type: String }
 	 	 ,confirmPassword: { type: String }
 })
 mongoose.model('Registration', RegistrationSchema)
 