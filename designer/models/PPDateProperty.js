Ext.define('designer.model.PPDateProperty', { 
	extend: 'designer.model.PPDataProperty',
	alias: 'PPDateProperty'
	
	,fields: [
		{ name: 'defaultValue', type: 'date', defaultValue: new Date(0), debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'defaultValue', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPDateProperty'));
