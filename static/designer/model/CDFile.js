Ext.define('designer.model.CDFile', { 
	extend: 'designer.model.ClientDesigner'
	
	,fields: [
		{ name: 'parentId', type: 'string' }
		,{ name: 'leaf', type: 'boolean' }
		,{ name: 'depth', type: 'int' }
		,{ name: 'index', type: 'int' }
		,{ name: 'name', type: 'string' }
		,{ name: 'content', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'content', type: 'presence' }
	]
});
