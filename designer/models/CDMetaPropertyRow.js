Ext.define('designer.model.CDMetaPropertyRow', { 
	alias: 'CDMetaPropertyRow'
	extend: 'designer.model.CDMetaRow',
	
	,fields: [
		{ name: 'type', type: 'string' }
		,{ name: 'value', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'type', type: 'presence' }
		,{ field: 'value', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDMetaPropertyRow'));
