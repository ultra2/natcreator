Ext.define('designer.model.CDDataType', { 
	extend: 'designer.model.ClientDesigner',
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
