var RegistrationSchema = new RegistrationSchema({ 
 	 	 username: { type: String }
 	 	 ,email: { type: String }
 	 	 ,password: { type: String }
 	 	 ,confirmPassword: { type: String }
 })
 mongoose.model('Registration', RegistrationSchema)
 