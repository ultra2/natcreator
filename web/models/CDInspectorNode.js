Ext.define('web.model.CDInspectorNode', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDInspectorNode'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'referenceType', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
