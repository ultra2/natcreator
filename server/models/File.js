var FileSchema = new Schema({ 
 	 	 _id: { type: String }
 	 	 ,content: { type: String }
 	 	 ,name: { type: String }
 });
 mongoose.model('File', FileSchema);
 