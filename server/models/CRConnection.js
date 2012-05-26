var mongoose = require('mongoose');

exports.CRConnectionSchema = new mongoose.Schema({ 
	 	 _id: { type: String }
	 	 ,created: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
	 	 ,modified: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
	 	 ,version: { type: Number }
	 	 ,deleted: { type: Boolean }
	 	 ,username: { type: String }
	 	 ,password: { type: String }
	 	 ,database: { type: String }
	 	 ,server: { type: String }
	 	 ,port: { type: String }
});
