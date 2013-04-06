Ext.define('natcreator.model.RPChangeType', { 
	extend: 'natcreator.model.RequestPost'
	
	,fields: [
		{ name: 'classId', type: 'string' }
		,{ name: 'metaNodeId', type: 'string' }
		,{ name: 'newTypeId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
