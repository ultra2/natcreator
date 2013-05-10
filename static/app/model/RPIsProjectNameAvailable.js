Ext.define('natcreator.model.RPIsProjectNameAvailable', { 
	extend: 'natcreator.model.RequestPost'
	
	,fields: [
		{ name: 'projectName', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'projectName', type: 'presence' }
	]
});
