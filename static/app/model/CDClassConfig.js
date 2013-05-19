Ext.define('natcreator.model.CDClassConfig', { 
	extend: 'natcreator.model.ClientDesigner'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'types', type: 'auto' }
		,{ name: 'values', type: 'auto' }
		,{ name: 'defaultValue', type: 'auto' }
		,{ name: 'isAccepted', type: 'auto' }
		,{ name: 'params', type: 'auto' }
		,{ name: 'dependency', type: 'boolean' }
		,{ name: 'hidden', type: 'boolean' }
		,{ name: 'common', type: 'boolean', defaultValue: 'true' }
		,{ name: 'getValues', type: 'auto' }
		,{ name: 'getValue', type: 'auto' }
		,{ name: 'refType', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
});
