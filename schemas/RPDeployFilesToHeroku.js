var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');
var ROFile = require('../schemas/ROFile.js').ROFile;

var RPDeployFilesToHeroku = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,files: [ROFile]
});

exports.RPDeployFilesToHeroku = RPDeployFilesToHeroku;
