Ext.define('designer.model.PPIntProperty', { 
	extend: 'designer.model.PPDataProperty',
	alias: 'PPIntProperty'
	
	,fields: [
		{ name: 'defaultValue', type: 'int', debug: true }
		,{ name: 'minValue', type: 'int', debug: true }
		,{ name: 'maxValue', type: 'int', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPIntProperty'));
