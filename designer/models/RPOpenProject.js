Ext.define('designer.model.RPOpenProject', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPOpenProject'
	
	,fields: [
		{ name: 'projectId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'projectId', type: 'presence' }
	]
});
