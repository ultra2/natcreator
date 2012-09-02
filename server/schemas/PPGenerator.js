var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PPGenerator = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,name: { type: String }
		,source: { type: String, default: 'function Generator(params) \n{ \n\tthis.params = params; \n} \n \nGenerator.prototype.getType = function() \n{ \n\treturn "schema"; \n}; \n\nGenerator.prototype.getRequiredCustomProperties = function() \n{ \n\treturn []; \n}; \n\nGenerator.prototype.run = function(schema, file, errors) \n{' }
		,origin_id: { type: String, ref: 'PMSharedGenerator' }
		,originRepo: { type: String }
		,originPath: { type: String }
});
exports.PPGenerator.plugin(commonPlugin);
