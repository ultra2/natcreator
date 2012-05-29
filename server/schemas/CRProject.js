var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');
var CRConnection = require('../schemas/CRConnection.js').CRConnection;

exports.CRProject = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
		,modified: { type: Date, default: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,connections: [CRConnection]
		,name: { type: String }
});

exports.DataProperty.plugin(commonPlugin);
