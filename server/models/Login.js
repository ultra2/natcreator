var LoginSchema = new Schema({ 
 	 	 _id: { type: String }
 	 	 ,username: { type: String }
 	 	 ,password: { type: String }
 	 	 ,rememberMe: { type: Boolean }
 });
 mongoose.model('Login', LoginSchema);
 