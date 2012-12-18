Ext.define('web.model.CDProjectItem', { 
	extend: 'web.model.ClientDesigner',
	alias: 'CDProjectItem'
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
});
