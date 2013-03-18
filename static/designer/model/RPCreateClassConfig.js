Ext.define('designer.model.RPCreateClassConfig', { 
	extend: 'designer.model.RequestPost'
	
	,fields: [
		{ name: 'classId', type: 'string' }
		,{ name: 'name', type: 'string' }
		,{ name: 'types', type: 'auto' }
		,{ name: 'values', type: 'auto' }
		,{ name: 'defaultValue', type: 'auto' }
		,{ name: 'notAccepted', type: 'auto' }
		,{ name: 'dependency', type: 'boolean' }
		,{ name: 'hidden', type: 'boolean' }
		,{ name: 'common', type: 'boolean', defaultValue: 'true' }
		,{ name: 'params', type: 'auto' }
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
