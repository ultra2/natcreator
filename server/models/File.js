var mongoose = require('mongoose');
 
 exports.FileSchema = new mongoose.Schema({ 
 	 	 _id: { type: String }
 	 	 ,content: { type: String }
 	 	 ,name: { type: String }
 });
 