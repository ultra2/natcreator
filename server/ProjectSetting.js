var ProjectSettingSchema = new ProjectSettingSchema({ 
 	 	 repositoryName: { type: String }
 	 	 ,repositoryHost: { type: String }
 	 	 ,fontSize: { type: Number }
 })
 mongoose.model('ProjectSetting', ProjectSettingSchema)
 