Ext.define('designer.model.RPInstallGenerator', { 
	extend: 'designer.model.RequestPost',
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
