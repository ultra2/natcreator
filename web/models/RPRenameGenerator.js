Ext.define('web.model.RPRenameGenerator', { 
	extend: 'web.model.RequestPost',
	alias: 'RPRenameGenerator'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'generatorId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'generatorId', type: 'presence' }
	]
	,fieldInfos: [
	]
});