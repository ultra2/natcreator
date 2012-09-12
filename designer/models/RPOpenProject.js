Ext.define('designer.model.RPOpenProject', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPOpenProject'
	
	,fields: [
		{ name: 'projectId', type: 'string' }
		,{ name: 'mode', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'projectId', type: 'presence' }
		,{ field: 'mode', type: 'presence' }
	]
	,fieldInfos: [
	]
});
