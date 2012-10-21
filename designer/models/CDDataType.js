Ext.define('designer.model.CDDataType', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDDataType'
	
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
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDDataType'));
