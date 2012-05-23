var CRAccountSchema = new CRAccountSchema({ 
 	 	 username: { type: String }
 	 	 ,passwordSalt: { type: String }
 	 	 ,passwordHash: { type: String }
 	 	 ,email: { type: String }
 	 	 ,isActivated: { type: Boolean }
 	 	 ,githubToken: { type: String }
 })
 mongoose.model('CRAccount', CRAccountSchema)
 