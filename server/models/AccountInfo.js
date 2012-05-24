var AccountInfoSchema = new Schema({ 
 	 	 _id: { type: String }
 	 	 ,username: { type: String }
 	 	 ,hasGithubToken: { type: Boolean }
 });
 mongoose.model('AccountInfo', AccountInfoSchema);
 