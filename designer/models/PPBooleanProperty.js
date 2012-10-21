Ext.define('designer.model.PPBooleanProperty', { 
	extend: 'designer.model.PPDataProperty',
	alias: 'PPBooleanProperty'
	
	,fields: [
		{ name: 'defaultValue', type: 'boolean', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPBooleanProperty'));
