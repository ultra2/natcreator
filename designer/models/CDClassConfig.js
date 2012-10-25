Ext.define('undefinedCDClassConfig', { 
	extend: 'undefinedClientDesigner',
	alias: 'CDClassConfig'
	
	,fields: [
		{ name: 'types', type: 'auto' }
		,{ name: 'values', type: 'auto' }
		,{ name: 'defaultValue', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'defaultValue', type: 'presence' }
	]
	,fieldInfos: [
	]
});
