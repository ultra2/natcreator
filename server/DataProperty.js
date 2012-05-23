var DataPropertySchema = new DataPropertySchema({ 
 	 	 index: { type: Number }
 	 	 ,isKey: { type: Boolean }
 	 	 ,isDebug: { type: Boolean }
 	 	 ,isNullable: { type: Boolean }
 	 	 ,isArray: { type: Boolean }
 	 	 ,name: { type: String }
 	 	 ,isPersistent: { type: Boolean, default: true }
 })
 mongoose.model('DataProperty', DataPropertySchema)
 