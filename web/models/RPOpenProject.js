Ext.define('web.model.RPOpenProject', { 
	extend: 'web.model.RequestPost',
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
