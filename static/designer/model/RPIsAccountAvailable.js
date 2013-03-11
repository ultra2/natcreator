Ext.define('designer.model.RPIsAccountAvailable', { 
	extend: 'designer.model.RequestPost'
	
	,fields: [
		{ name: 'username', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
	]
});
