Ext.define('designer.model.CDProjectItem', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDProjectItem'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDProjectItem'));
