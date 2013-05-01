Ext.define('natcreator.model.RPOpenProject', { 
	extend: 'natcreator.model.RequestPost'
	
	,fields: [
		{ name: 'projectId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'projectId', type: 'presence' }
	]
});
