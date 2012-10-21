Ext.define('designer.model.PPObjectProperty', { 
	extend: 'designer.model.PPDataProperty',
	alias: 'PPObjectProperty'
	
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
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPObjectProperty'));
