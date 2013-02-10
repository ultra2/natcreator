Ext.define('designer.model.CDClassConfig', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDClassConfig'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'type', type: 'string' }
		,{ name: 'types', type: 'auto' }
		,{ name: 'values', type: 'auto' }
		,{ name: 'defaultValue', type: 'auto' }
		,{ name: 'notAccepted', type: 'auto' }
		,{ name: 'params', type: 'auto' }
		,{ name: 'dependency', type: 'boolean' }
		,{ name: 'hidden', type: 'boolean' }
		,{ name: 'common', type: 'boolean', defaultValue: 'true' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
});
