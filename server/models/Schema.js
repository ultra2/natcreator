var mongoose = require('mongoose');
 var DataPropertySchema = require('../model/DataProperty.js').DataPropertySchema;
 
 exports.SchemaSchema = new mongoose.Schema({ 
 	 	 _id: { type: String }
 	 	 ,created: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
 	 	 ,modified: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
 	 	 ,version: { type: Number }
 	 	 ,deleted: { type: Boolean }
 	 	 ,isHierarchy: { type: Boolean }
 	 	 ,parentId: { type: String }
 	 	 ,leaf: { type: Boolean }
 	 	 ,depth: { type: Number }
 	 	 ,index: { type: Number }
 	 	 ,name: { type: String }
 	 	 ,strParam1: { type: String }
 	 ,associations: [
 	 	 properties: [DataProperty]
 	 ]
 });
 