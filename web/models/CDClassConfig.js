Ext.define('web.model.CDClassConfig', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDClassConfig'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'type', type: 'string' }
		,{ name: 'types', type: 'auto' }
		,{ name: 'values', type: 'auto' }
		,{ name: 'defaultValue', type: 'auto' }
		,{ name: 'accepted', type: 'auto' }
		,{ name: 'notAccepted', type: 'auto' }
		,{ name: 'dependency', type: 'boolean' }
		,{ name: 'hidden', type: 'boolean' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
});
