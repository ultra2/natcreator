Ext.define('designer.model.ROFile', { 
	extend: 'designer.model.RequestObject'
	
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
