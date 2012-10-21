Ext.define('designer.model.RPCreateGenerator', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPCreateGenerator'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'name', type: 'format', matcher: /^([\w\-\.])+$/ }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPCreateGenerator'));
