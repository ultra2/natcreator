Ext.define('web.model.RPCreateClassConfig', { 
	extend: 'web.model.RequestPost',
	alias: 'RPCreateClassConfig'
	
	,fields: [
		{ name: 'classId', type: 'string' }
		,{ name: 'name', type: 'string' }
		,{ name: 'types', type: 'auto' }
		,{ name: 'values', type: 'auto' }
		,{ name: 'defaultValue', type: 'auto' }
		,{ name: 'accepted', type: 'auto' }
		,{ name: 'notAccepted', type: 'auto' }
		,{ name: 'isDependency', type: 'boolean' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
});
