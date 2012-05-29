var mongoose = require('mongoose');

exports.CRAccountProject = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
		,modified: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,account_id: { type: String, ref: 'CRAccount' }
		,project_id: { type: String, ref: 'CRProject' }
		,role_id: { type: String, ref: 'CRAccountProjectRole' }
});
