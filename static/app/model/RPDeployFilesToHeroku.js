Ext.define('natcreator.model.RPDeployFilesToHeroku', { 
	extend: 'natcreator.model.RequestPost'
	
	,fields: [
	]
	,associations: [
		{ type: 'hasMany', name: 'files', associationKey: 'files', model: 'natcreator.model.ROFile', primaryKey: '_id' }
	]
	,validations: [
		{ field: 'files', type: 'presence' }
	]
});
