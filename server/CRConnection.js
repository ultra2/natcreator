var CRConnectionSchema = new CRConnectionSchema({ 
 	 	 username: { type: String }
 	 	 ,password: { type: String }
 	 	 ,database: { type: String }
 	 	 ,server: { type: String }
 	 	 ,port: { type: String }
 })
 mongoose.model('CRConnection', CRConnectionSchema)
 