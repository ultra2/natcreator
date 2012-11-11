Ext.define('web.model.CDClassConfig', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDClassConfig'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
		,{ name: 'type', type: 'string', debug: true }
		,{ name: 'types', type: 'auto' }
		,{ name: 'values', type: 'auto' }
		,{ name: 'defaultValue', type: 'auto' }
		,{ name: 'accepted', type: 'auto', debug: true }
		,{ name: 'notAccepted', type: 'auto', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
