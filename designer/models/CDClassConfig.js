Ext.define('designer.model.CDClassConfig', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDClassConfig'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
		,{ name: 'type', type: 'string', debug: true }
		,{ name: 'types', type: 'auto' }
		,{ name: 'values', type: 'auto' }
		,{ name: 'defaultValue', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
