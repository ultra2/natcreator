Ext.define('designer.model.PPDataProperty', { 
	extend: 'designer.model.PPProjectItem',
	alias: 'PPDataProperty'
	
	,fields: [
		{ name: 'isKey', type: 'boolean', debug: true }
		,{ name: 'isNullable', type: 'boolean', debug: true }
		,{ name: 'isArray', type: 'boolean', debug: true }
		,{ name: 'name', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPDataProperty'));
