Ext.define('designer.model.CDProjectItem', { 
	extend: 'designer.model.ClientDesigner',
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
