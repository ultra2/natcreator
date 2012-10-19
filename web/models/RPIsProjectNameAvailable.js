Ext.define('web.model.RPIsProjectNameAvailable', { 
	extend: 'web.model.RequestPost',
	alias: 'RPIsProjectNameAvailable'
	
	,fields: [
		{ name: 'projectName', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'projectName', type: 'presence' }
	]
	,fieldInfos: [
	]
});
