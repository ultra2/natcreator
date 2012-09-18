Ext.define('web.model.PPGenerator', { 
	extend: 'web.model.PersistentProject',
	alias: 'PPGenerator'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'source', type: 'string', defaultValue: 'function Generator(project, params) \n{ \n\tthis.params = params; \n\tthis.project = project; \n} \n \nGenerator.prototype.getType = function() \n{ \n\treturn "schema"; //types: "projectfile", "schema"\n}; \n\nGenerator.prototype.getRequiredCustomProperties = function() \n{ \n\treturn []; \n}; \n\nGenerator.prototype.run = function(data, file, errors) \n{ \n\tfile.set("name", schema.get("name") + ".js"); \n\tfile.writeln("first line"); \n\tfile.indent++; \n\tfile.writeln("indented line"); \n\tfile.indent--; \n\tfile.writeln("last line"); \n}; \n\n' }
		,{ name: 'sharedSource', type: 'string', defaultValue: 'function Generator(project, params) \n{ \n\tthis.params = params; \n\tthis.project = project; \n} \n \nGenerator.prototype.getType = function() \n{ \n\treturn ""; //do nothing, under development\n}; \n\n' }
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
