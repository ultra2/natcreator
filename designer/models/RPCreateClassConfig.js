Ext.define('designer.model.RPCreateClassConfig', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPCreateClassConfig'
	
	,fields: [
		{ name: 'classId', type: 'string' }
		,{ name: 'name', type: 'string' }
		,{ name: 'types', type: 'auto' }
		,{ name: 'values', type: 'auto' }
		,{ name: 'defaultValue', type: 'auto' }
		,{ name: 'accepted', type: 'auto' }
		,{ name: 'notAccepted', type: 'auto' }
		,{ name: 'dependency', type: 'boolean' }
		,{ name: 'hidden', type: 'boolean' }
		,{ name: 'advanced', type: 'boolean' }
		,{ name: 'params', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
});
