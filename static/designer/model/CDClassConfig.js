Ext.define('designer.model.CDClassConfig', { 
	extend: 'designer.model.ClientDesigner'
	
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
		,{ name: 'reftoGetValues', type: 'auto' }
		,{ name: 'reftoGetValue', type: 'auto' }
		,{ name: 'refType', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
});
