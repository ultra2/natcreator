Ext.define('designer.model.RPOpenProject', { 
	alias: 'RPOpenProject'
	extend: 'designer.model.RequestPost',
	
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
