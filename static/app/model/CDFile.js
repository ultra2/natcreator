Ext.define('natcreator.model.CDFile', { 
	extend: 'natcreator.model.ClientDesigner'
	
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
