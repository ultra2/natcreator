var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PPGenerator = Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,name: { type: String }
		,source: { type: String, default: 'function Generator(project, params) \n{ \n\tthis.project = project; \n\tthis.params = params; \n} \n \nGenerator.prototype.getType = function() \n{ \n\treturn "projectfile"; //valid types: "projectfile", "schema"\n}; \n\nGenerator.prototype.getRequiredCustomProperties = function() \n{ \n\treturn []; \n}; \n\nGenerator.prototype.run = function(data, file, errors) \n{ \n\tfile.set("name", "test.js"); \n\tfile.writeln("first line"); \n\tfile.indent++; \n\tfile.writeln("indented line"); \n\tfile.indent--; \n\tfile.writeln("last line"); \n}; \n\n' }
		,sharedSource: { type: String, default: 'function Generator(project, params) \n{ \n\tthis.params = params; \n\tthis.project = project; \n} \n \nGenerator.prototype.getType = function() \n{ \n\treturn ""; //do nothing, under development\n}; \n\n' }
		,originProject_id: { type: String, ref: 'PMProject' }
		,originGenerator_id: { type: String, ref: 'PPGenerator' }
		,generatorVersion: { type: String, default: '1.0' }
});
exports.PPGenerator.plugin(commonPlugin);
