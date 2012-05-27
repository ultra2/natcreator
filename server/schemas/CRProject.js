var mongoose = require('mongoose');
var CRConnectionSchema = require('../schemas/CRConnection.js').CRConnectionSchema;

exports.CRProjectSchema = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
		,modified: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,connections: [CRConnectionSchema]
		,name: { type: String }
});
