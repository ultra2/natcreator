var GenerationStepSchema = new GenerationStepSchema({ 
 	 	 generator_id: { type: String }
 	 	 ,path: { type: String }
 	 	 ,projectSetting_id: { type: String }
 	 	 ,deleteDirectory: { type: Boolean }
 	 	 ,active: { type: Boolean }
 	 	 ,params: { type: String }
 })
 mongoose.model('GenerationStep', GenerationStepSchema)
 