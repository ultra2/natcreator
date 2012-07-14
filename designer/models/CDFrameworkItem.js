Ext.define('designer.model.CDFrameworkItem', { 
	alias: 'CDFrameworkItem'
	extend: 'designer.model.ClientDesigner',
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'displayName', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'displayName', type: 'presence' }
	]
	,fieldInfos: [
	]
});
