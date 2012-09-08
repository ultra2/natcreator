var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CRBaseObject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.CRBaseObject.plugin(commonPlugin);
