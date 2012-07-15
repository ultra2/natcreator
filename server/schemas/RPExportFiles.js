var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');
var ROFile = require('../schemas/ROFile.js').ROFile;

exports.RPExportFiles = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,path: { type: String }
		,deleteDirectory: { type: Boolean }
		,files: [ROFile]
});
exports.CRBaseObject.plugin(commonPlugin);
