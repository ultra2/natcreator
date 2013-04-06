Ext.define('natcreator.model.ROFile', { 
	extend: 'natcreator.model.RequestObject'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'content', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'content', type: 'presence' }
	]
});
