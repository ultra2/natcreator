Ext.define('designer.model.RPCreateGenerator', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPCreateGenerator'
	
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