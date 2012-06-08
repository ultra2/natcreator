var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');
var ROFile = require('../schemas/ROFile.js').ROFile;

exports.RPExportFiles = new mongoose.Schema({ 
		_id: { type: String }
		,path: { type: String }
		,deleteDirectory: { type: Boolean }
		,files: [ROFile]
});

exports.RPExportFiles.plugin(commonPlugin);
