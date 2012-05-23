var AccountInfoSchema = new AccountInfoSchema({ 
 	 	 username: { type: String }
 	 	 ,hasGithubToken: { type: Boolean }
 })
 mongoose.model('AccountInfo', AccountInfoSchema)
 