Ext.define('designer.model.RPExportFiles', { 
	extend: 'designer.model.RequestPost'
	
	,fields: [
		{ name: 'path', type: 'string' }
		,{ name: 'deleteDirectory', type: 'boolean' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'path', type: 'presence' }
		,{ field: 'files', type: 'presence' }
	]
});
