var DatePropertySchema = new DatePropertySchema({ 
 	 	 defaultValue: { type: Date, defaultValue: 'Fri Apr 27 2012 00:00:00 GMT+0200 (Central Europe Daylight Time)' }
 })
 mongoose.model('DateProperty', DatePropertySchema)
 