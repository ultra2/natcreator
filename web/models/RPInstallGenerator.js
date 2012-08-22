Ext.define('undefinedRPInstallGenerator', { 
	extend: 'undefinedRequestPost',
	alias: 'RPInstallGenerator'
	
	,fields: [
		{ name: 'sharedGeneratorId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'sharedGeneratorId', type: 'presence' }
	]
	,fieldInfos: [
	]
});
