Ext.define('web.model.CDMetaPropertyRow', { 
	extend: 'web.model.CDMetaRow',
	alias: 'CDMetaPropertyRow'
	
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
Ext.data.NodeInterface.decorate(Ext.create('web.model.CDMetaPropertyRow'));