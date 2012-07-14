Ext.define('web.model.RPOpenProject', { 
	alias: 'RPOpenProject'
	extend: 'web.model.RequestPost',
	
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
