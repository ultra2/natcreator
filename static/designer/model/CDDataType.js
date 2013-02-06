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
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDDataType'));
