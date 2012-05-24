var AccountInfoSchema = new AccountInfoSchema({ 
 	 	 _id: { type: String }
 	 	 ,username: { type: String }
 	 	 ,hasGithubToken: { type: Boolean }
 })
 mongoose.model('AccountInfo', AccountInfoSchema)
 