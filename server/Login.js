var LoginSchema = new LoginSchema({ 
 	 	 username: { type: String }
 	 	 ,password: { type: String }
 	 	 ,rememberMe: { type: Boolean }
 })
 mongoose.model('Login', LoginSchema)
 