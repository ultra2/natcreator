var GenerationStepSchema = new GenerationStepSchema({ 
 	 	 _id: { type: String }
 	 	 ,created: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
 	 	 ,modified: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
 	 	 ,version: { type: Number }
 	 	 ,deleted: { type: Boolean }
 	 	 ,generator_id: { type: String }
 	 	 ,path: { type: String }
 	 	 ,projectSetting_id: { type: String }
 	 	 ,deleteDirectory: { type: Boolean }
 	 	 ,active: { type: Boolean }
 	 	 ,params: { type: String }
 })
 mongoose.model('GenerationStep', GenerationStepSchema)
 