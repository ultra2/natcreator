Ext.define('undefinedCDProjectItem', { 
	extend: 'undefinedClientDesigner',
	alias: 'CDProjectItem'
	
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
