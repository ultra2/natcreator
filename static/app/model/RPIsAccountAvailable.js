Ext.define('natcreator.model.RPIsAccountAvailable', { 
	extend: 'natcreator.model.RequestPost'
	
	,fields: [
		{ name: 'username', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
	]
});
