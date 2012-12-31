Ext.define('web.model.RPInstallGenerator', { 
	extend: 'web.model.RequestPost',
	alias: 'RPInstallGenerator'
	
	,fields: [
		{ name: 'sharedGeneratorId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'sharedGeneratorId', type: 'presence' }
	]
});
