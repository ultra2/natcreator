var mongoose = require('mongoose');
 
 exports.StringPropertySchema = new mongoose.Schema({ 
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
 	 	 ,defaultValue: { type: String }
 	 	 ,minLength: { type: Number }
 	 	 ,maxLength: { type: String }
 	 	 ,vFormat: { type: String }
 });
 