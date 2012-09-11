Ext.define('web.model.RPRenameGenerator', { 
	extend: 'web.model.RequestPost',
	alias: 'RPRenameGenerator'
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
