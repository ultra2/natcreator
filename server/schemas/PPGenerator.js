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
		,source: { type: String, default: 'function Generator(params) \n{ \n\tthis.params = params; \n} \n \nGenerator.prototype.getType = function() \n{ \n\treturn "schema"; //types: "schema", "schemalist", "projectfile"\n}; \n\nGenerator.prototype.getRequiredCustomProperties = function() \n{ \n\treturn []; \n}; \n\nGenerator.prototype.run = function(schema, file, errors) \n{ \n\tfile.set("name", schema.get("name") + ".js"); \n\tfile.writeln("first line"); \n\tfile.indent++; \n\tfile.writeln("indented line"); \n\tfile.indent--; \n\tfile.writeln("last line"); \n}; \n\n' }
		,originProject_id: { type: String, ref: 'PMProject' }
		,originGenerator_id: { type: String, ref: 'PPGenerator' }
});
exports.PPGenerator.plugin(commonPlugin);
