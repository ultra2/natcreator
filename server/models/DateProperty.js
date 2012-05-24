var DatePropertySchema = new Schema({ 
 	 	 _id: { type: String }
 	 	 ,created: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
 	 	 ,modified: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
 	 	 ,version: { type: Number }
 	 	 ,deleted: { type: Boolean }
 	 	 ,index: { type: Number }
 	 	 ,isKey: { type: Boolean }
 	 	 ,isDebug: { type: Boolean }
 	 	 ,isNullable: { type: Boolean }
 	 	 ,isArray: { type: Boolean }
 	 	 ,name: { type: String }
 	 	 ,isPersistent: { type: Boolean, default: true }
 	 	 ,defaultValue: { type: Date, default: 'Fri Apr 27 2012 00:00:00 GMT+0200 (Central Europe Daylight Time)' }
 });
 mongoose.model('DateProperty', DatePropertySchema);
 