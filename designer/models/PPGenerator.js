Ext.define('designer.model.PPGenerator', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPGenerator'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'source', type: 'string', defaultValue: 'function Generator(params) \n{ \n\tthis.params = params; \n} \n \nGenerator.prototype.getType = function() \n{ \n\treturn "schema"; //types: "schema", "schemalist", "projectfile"\n}; \n\nGenerator.prototype.getRequiredCustomProperties = function() \n{ \n\treturn []; \n}; \n\nGenerator.prototype.run = function(schema, file, errors) \n{ \n\tfile.set("name", schema.get("name") + ".js"); \n\tfile.writeln("first line"); \n\tfile.indent++; \n\tfile.writeln("indented line"); \n\tfile.indent--; \n\tfile.writeln("last line"); \n}; \n\n' }
		,{ name: 'sharedSource', type: 'string' }
		,{ name: 'originProject_id', type: 'string' }
		,{ name: 'originGenerator_id', type: 'string' }
		,{ name: 'generatorVersion', type: 'string', defaultValue: '1.0' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'name', type: 'format', matcher: /^([\w\-])+(\/)+([\w\-\.])+$/ }
		,{ field: 'source', type: 'presence' }
		,{ field: 'originProject_id', type: 'presence' }
		,{ field: 'originGenerator_id', type: 'presence' }
		,{ field: 'generatorVersion', type: 'presence' }
	]
	,fieldInfos: [
	]
});
