Ext.define('designer.model.CDDataType', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDDataType'
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
});
