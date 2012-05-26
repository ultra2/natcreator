var RegistrationSchema = new Schema({ 
 	 	 _id: { type: String }
 	 	 ,username: { type: String }
 	 	 ,email: { type: String }
 	 	 ,password: { type: String }
 	 	 ,confirmPassword: { type: String }
 });
 mongoose.model('Registration', RegistrationSchema);
 