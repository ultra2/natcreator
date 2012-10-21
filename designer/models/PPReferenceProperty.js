Ext.define('designer.model.PPReferenceProperty', { 
	extend: 'designer.model.PPDataProperty',
	alias: 'PPReferenceProperty'
	
	,fields: [
		{ name: 'type_id', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPReferenceProperty'));
