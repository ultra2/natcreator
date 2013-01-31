var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');
var ROFile = require('../schemas/ROFile.js').ROFile;

exports.RPDeployFilesToHeroku = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,files: [ROFile]
});
exports.RPDeployFilesToHeroku.plugin(commonPlugin);
