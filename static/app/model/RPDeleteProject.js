Ext.define('natcreator.model.RPDeleteProject', { 
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
