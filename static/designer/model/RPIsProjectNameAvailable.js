Ext.define('designer.model.RPIsProjectNameAvailable', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPIsProjectNameAvailable'
	
	,fields: [
		{ name: 'projectName', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'projectName', type: 'presence' }
	]
});
