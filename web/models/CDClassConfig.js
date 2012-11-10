Ext.define('web.model.CDClassConfig', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDClassConfig'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
		,{ name: 'types', type: 'auto' }
		,{ name: 'values', type: 'auto' }
		,{ name: 'defaultValue', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
