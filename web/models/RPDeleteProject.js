Ext.define('web.model.RPDeleteProject', { 
	extend: 'web.model.RequestPost',
	alias: 'RPDeleteProject'
	
	,fields: [
		{ name: 'projectId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'projectId', type: 'presence' }
	]
	,fieldInfos: [
	]
});
