Ext.define('designer.model.RPDeleteProject', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPDeleteProject'
	
	,fields: [
		{ name: 'projectId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'projectId', type: 'presence' }
	]
});
