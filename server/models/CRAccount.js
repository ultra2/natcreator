var CRAccountSchema = new Schema({ 
 	 	 _id: { type: String }
 	 	 ,created: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
 	 	 ,modified: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
 	 	 ,version: { type: Number }
 	 	 ,deleted: { type: Boolean }
 	 	 ,username: { type: String }
 	 	 ,passwordSalt: { type: String }
 	 	 ,passwordHash: { type: String }
 	 	 ,email: { type: String }
 	 	 ,isActivated: { type: Boolean }
 	 	 ,githubToken: { type: String }
 });
 mongoose.model('CRAccount', CRAccountSchema);
 