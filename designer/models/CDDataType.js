Ext.define('undefinedCDDataType', { 
	extend: 'undefinedClientDesigner',
	alias: 'CDDataType'
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
