var PersistentCSchema = new PersistentCSchema({ 
 	 	 created: { type: Date, defaultValue: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
 	 	 ,modified: { type: Date, defaultValue: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
 	 	 ,version: { type: Number }
 	 	 ,deleted: { type: Boolean }
 })
 mongoose.model('PersistentC', PersistentCSchema)
 