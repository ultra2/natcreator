Ext.define('web.model.RPChangeType', { 
	extend: 'web.model.RequestPost',
	alias: 'RPChangeType'
	
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
