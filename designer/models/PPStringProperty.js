Ext.define('designer.model.PPStringProperty', { 
	extend: 'designer.model.PPDataProperty',
	alias: 'PPStringProperty'
	
	,fields: [
		{ name: 'defaultValue', type: 'string', debug: true }
		,{ name: 'minLength', type: 'int', debug: true }
		,{ name: 'vFormat', type: 'string', debug: true }
		,{ name: 'maxLength', type: 'int', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'vFormat', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPStringProperty'));
