Ext.define('web.model.CDDataType', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDDataType'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'isCustomPropertyType', type: 'boolean', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
