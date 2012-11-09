var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');
var PPCustomProperty = require('../schemas/PPCustomProperty.js').PPCustomProperty;

exports.PPProjectConfig = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,customProperties: [PPCustomProperty]
		,toolbox: { type: mongoose.Schema.Types.Mixed }
});
exports.PPProjectConfig.plugin(commonPlugin);
