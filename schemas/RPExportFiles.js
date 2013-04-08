var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');
var ROFile = require('../schemas/ROFile.js').ROFile;

var RPExportFiles = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,path: { type: String }
		,deleteDirectory: { type: Boolean }
		,files: [ROFile]
});

exports.RPExportFiles = RPExportFiles;
